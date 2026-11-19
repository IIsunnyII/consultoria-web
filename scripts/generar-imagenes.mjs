// Genera public/og.png (1200×630, redes sociales) y public/apple-touch-icon.png (180×180).
// Uso: npm run imagenes  — vuelve a ejecutarlo cuando cambien el nombre o los textos.
// Lee los textos de src/data/site.ts con una expresión regular simple (sin compilar TS).
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const src = await readFile(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const pick = (key) => src.match(new RegExp(`${key}:\\s*'([^']*)'`))?.[1] ?? '';
const name = pick('name');
const initials = pick('initials');
const role = pick('role');
// Titular del hero (objeto `hero` en site.ts)
const [line1, line2] =
  src.match(/export const hero = \{[\s\S]*?title:\s*\['([^']*)',\s*'([^']*)'\]/)?.slice(1) ?? ['', ''];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const font = `'Helvetica Neue', Helvetica, Arial, sans-serif`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="light" cx="50%" cy="0%" r="75%">
      <stop offset="0" stop-color="#fff" stop-opacity=".16"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ededf1"/><stop offset="1" stop-color="#929299"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#000"/>
  <rect width="1200" height="630" fill="url(#light)"/>
  <rect x="72" y="64" width="${44 + initials.length * 18}" height="44" rx="22" fill="none" stroke="#fff" stroke-opacity=".2"/>
  <text x="${94 + initials.length * 9}" y="93" text-anchor="middle" font-family="${font}" font-size="20" font-weight="700" fill="#f5f5f5" letter-spacing="-1">${esc(initials)}</text>
  <text x="${136 + initials.length * 18}" y="92" font-family="${font}" font-size="18" fill="#b3b3b8">${esc(name)}</text>
  <text x="72" y="380" font-family="${font}" font-size="96" font-weight="700" letter-spacing="-5" fill="#f5f5f5">${esc(line1)}</text>
  <text x="72" y="478" font-family="${font}" font-size="96" font-weight="700" letter-spacing="-5" fill="url(#chrome)">${esc(line2)}</text>
  <text x="72" y="566" font-family="${font}" font-size="22" fill="#b3b3b8" letter-spacing="3">${esc(role.toUpperCase())}</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#000"/>
  <text x="90" y="112" text-anchor="middle" font-family="${font}" font-size="72" font-weight="700" letter-spacing="-4" fill="#f5f5f5">${esc(initials)}</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');
await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
console.log('Listo: public/og.png y public/apple-touch-icon.png');
