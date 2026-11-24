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

export function pathFor(locale, colorId) {
  return `${locale.base}${colorsById.get(colorId).slug}/`;
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
