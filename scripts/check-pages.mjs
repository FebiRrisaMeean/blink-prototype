import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../.pages');
const errors = new Set();
const files = [];
async function walk(directory) {
  for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) { errors.add(`Symbolic link: ${file}`); continue; }
    if (entry.isDirectory()) await walk(file);
    else files.push(file);
  }
}
await walk(root);
const fileNames = new Set(files.map(file => path.basename(file)));
let total = 0;
for (const file of files) {
  const relative = path.relative(root, file);
  const stat = await fs.stat(file);
  total += stat.size;
  if (!stat.size && relative !== '.nojekyll') errors.add(`Empty file: ${relative}`);
  if (/\.(?:map|zip|log)$/i.test(file)) errors.add(`Non-runtime file: ${relative}`);
  if (!/\.(?:html|css|js)$/i.test(file)) continue;
  const text = await fs.readFile(file, 'utf8');
  if (/https:\/\/www\.figma\.com\/api\/mcp\/asset\//.test(text)) errors.add(`Temporary Figma URL: ${relative}`);
  const references = [];
  if (file.endsWith('.html')) for (const match of text.matchAll(/(?:src|href)=["']([^"']+)["']/g)) references.push(match[1]);
  if (file.endsWith('.css')) for (const match of text.matchAll(/url\(\s*["']?([^"')\s]+)["']?\s*\)/g)) references.push(match[1]);
  if (file.endsWith('.js')) {
    for (const match of text.matchAll(/["'](\.\/(?:assets|profile-assets|fonts)\/[^"']+\.(?:svg|png|jpe?g|webp|gif|ttf|woff2?))["']/g)) references.push(match[1]);
    // Bundled image constants also concatenate an asset directory and a filename
    for (const match of text.matchAll(/["'](?:\/([a-zA-Z0-9_-]+\.(?:svg|png|jpe?g|webp|gif|ttf|woff2?))|([a-f0-9]+\.(?:svg|png|jpe?g|webp|gif)))["']/g)) {
      const name = match[1] || match[2];
      if (!fileNames.has(name)) errors.add(`Missing bundled asset ${name} in ${relative}`);
    }
  }
  for (const reference of references) {
    if (/^(?:data:|https?:|#)/i.test(reference)) continue;
    if (reference.startsWith('/')) { errors.add(`Root-relative URL breaks project hosting: ${reference}`); continue; }
    const target = path.resolve(path.dirname(file), decodeURIComponent(reference.split(/[?#]/)[0]));
    if (!target.startsWith(root + path.sep)) { errors.add(`URL escapes site directory: ${reference}`); continue; }
    try { if (!(await fs.stat(target)).isFile()) errors.add(`Not a file: ${reference}`); }
    catch { errors.add(`Missing ${reference} referenced by ${relative}`); }
  }
}
if (!files.includes(path.join(root, 'index.html'))) errors.add('Missing index.html');
if (total >= 1024 ** 3) errors.add('Site exceeds 1 GiB');
if (errors.size) throw Error([...errors].join('\n'));
console.log(`Pages checks passed: ${files.length} files, relative URLs, local assets, no source maps`);
