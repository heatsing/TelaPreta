import { spawnSync } from 'node:child_process';
import { cp, lstat, mkdtemp, realpath, rename, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { finalizeExport } from './src/finalize-export.mjs';

const [argument] = process.argv.slice(2);
if (argument === '--pages') process.env.TELAPRETA_BUILD_TARGET = 'pages';
else if (argument) process.env.TELAPRETA_PREVIEW_URL = argument;

const { basePath, pagesBuild } = await import('./src/site-config.mjs');
const workspace = await realpath(new URL('./', import.meta.url));

async function buildDirectory(name) {
  const directory = join(workspace, name);
  try {
    const entry = await lstat(directory);
    if (!entry.isDirectory() || entry.isSymbolicLink() || relative(directory, await realpath(directory))) {
      throw new Error(`Unexpected build directory: ${directory}`);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  return directory;
}

async function publishPages(output, destination) {
  const temporary = await realpath(await mkdtemp(join(workspace, '.telapreta-pages-')));
  const staging = join(temporary, 'site');
  const previous = join(temporary, 'previous');
  let previousMoved = false;
  try {
    await cp(output, staging, { recursive: true });
    try {
      await rename(destination, previous);
      previousMoved = true;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    try {
      await rename(staging, destination);
      previousMoved = false;
    } catch (error) {
      if (previousMoved) {
        await rename(previous, destination);
        previousMoved = false;
      }
      throw error;
    }
  } finally {
    if (!previousMoved) await rm(temporary, { recursive: true, force: true });
  }
}

const output = await buildDirectory('out');
await buildDirectory('.next');
const destination = pagesBuild ? await buildDirectory('docs') : null;
const next = fileURLToPath(new URL('./node_modules/next/dist/bin/next', import.meta.url));
const build = spawnSync(process.execPath, [next, 'build'], { cwd: workspace, stdio: 'inherit' });
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

const { pageCount, redirectCount } = await finalizeExport({ output, basePath, pagesBuild });
if (destination) await publishPages(output, destination);
console.log(`Prepared ${pageCount} App Router pages and ${redirectCount} legacy routes in ${pagesBuild ? 'docs' : 'out'}/`);
