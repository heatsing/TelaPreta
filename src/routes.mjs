import { posix } from 'node:path';

export const screenColors = [
  { id: 'black', slug: 'black-screen', hex: '#000000' },
  { id: 'white', slug: 'white-screen', hex: '#FFFFFF' },
  { id: 'red', slug: 'red-screen', hex: '#FF0000' },
  { id: 'green', slug: 'green-screen', hex: '#00FF00' },
  { id: 'blue', slug: 'blue-screen', hex: '#0000FF' },
  { id: 'gray', slug: 'gray-screen', hex: '#808080' }
];

const colorsById = new Map(screenColors.map((color) => [color.id, color]));

const sceneSlugs = {
  error: 'retro-blue-screen',
  cracked: 'broken-screen',
  radar: 'radar-screen',
  terminal: 'terminal-screen',
  call: 'video-call-screen',
  'update-blue': 'windows-10-update-screen',
  'update-retro': 'windows-xp-update-screen',
  'update-silver': 'mac-os-x-update-screen',
  'update-violet': 'ubuntu-22-04-update-screen',
  'update-gray': 'chromeos-update-screen',
  bounce: 'bouncing-logo-screen',
  clock: 'flip-clock-screen',
  quotes: 'quote-screen',
  bars: 'no-signal-screen',
  rain: 'digital-rain-screen'
};

export function pathFor(locale, colorId) {
  return `${locale.base}${colorsById.get(colorId).slug}/`;
}

export function scenePathFor(locale, sceneId) {
  const slug = sceneSlugs[sceneId];
  if (!slug) throw new Error(`Unknown scene: ${sceneId}`);
  return `${locale.base}${slug}/`;
}

export function relativeHref(fromPath, targetPath) {
  if (!targetPath.startsWith('/') || targetPath.startsWith('//')) return targetPath;
  const [, pathname, suffix] = targetPath.match(/^([^?#]*)(.*)$/);
  const relative = posix.relative(fromPath, pathname);
  if (!relative) return suffix || './';
  return relative + (pathname.endsWith('/') ? '/' : '') + suffix;
}

export function aliasesFor(locale) {
  const aliases = [
    [locale.base, 'black'],
    [`${locale.base}White-screen/`, 'white'],
    [`${locale.base}bule-screen/`, 'blue']
  ];
  if (locale.previousWhitePath && locale.previousWhitePath !== 'white-screen') {
    aliases.push([`${locale.base}${locale.previousWhitePath}/`, 'white']);
  }
  return aliases;
}
