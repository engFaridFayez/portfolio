import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const mime = { '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff' };
const dataUrl = (file) => {
  if (!existsSync(file)) throw new Error(`Missing preview asset: ${file}`);
  return `data:${mime[extname(file)] || 'application/octet-stream'};base64,${readFileSync(file).toString('base64')}`;
};

let html = readFileSync(resolve(dist, 'index.html'), 'utf8');
const jsMatch = html.match(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/);
const cssMatch = html.match(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (!jsMatch || !cssMatch) throw new Error('Expected one Vite JavaScript bundle and stylesheet. Run npm run build first.');
const jsPath = resolve(dist, jsMatch[1]);
const cssPath = resolve(dist, cssMatch[1]);
let js = readFileSync(jsPath, 'utf8');
let css = readFileSync(cssPath, 'utf8');

// Vite's relative-base image imports resolve against the bundle location.
// Embed them so the exported page works when opened directly from disk.
js = js.replace(/new URL\("([^"]+)",import\.meta\.url\)\.href/g,
  (_, name) => JSON.stringify(dataUrl(resolve(dirname(jsPath), name))));
css = css.replace(/url\((['"]?)([^)'"\s]+)\1\)/g, (original, quote, name) => {
  if (/^(data:|https?:|#)/.test(name)) return original;
  return `url("${dataUrl(resolve(dirname(cssPath), name))}")`;
});
if (/\bimport\s*\(/.test(js) || /import\.meta\.url/.test(js)) {
  throw new Error('The build contains a split module or unhandled asset. Keep a single bundle for the standalone preview.');
}
const inlineScript = `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`;
const inlineCss = `<style>${css}</style>`;
html = html.replace(jsMatch[0], () => inlineScript).replace(cssMatch[0], () => inlineCss);
const notices = readdirSync(resolve(root, 'LICENSES')).sort().map(name => `${name}\n${readFileSync(resolve(root, 'LICENSES', name), 'utf8')}`).join('\n\n');
html = html.replace('</head>', () => `<!-- Third-party notices\n${notices.replaceAll('-->', '—>')}\n-->\n</head>`);
const destination = resolve(root, 'Portfolio_Preview.html');
writeFileSync(destination, html);
console.log(`Created Portfolio_Preview.html (${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB).`);
