import fs from 'node:fs/promises';
import path from 'node:path';

const workspace = path.resolve(import.meta.dirname, '..');
const source = path.join(workspace, 'dist');
const output = path.join(workspace, '.pages');
if (path.dirname(output) !== workspace || path.basename(output) !== '.pages') throw Error('Unexpected publication directory');

// Copy only runtime files, so local reports and source maps stay outside the site
const runtime = new Set(['.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.ttf', '.woff', '.woff2', '.ico']);
const copied = [];
async function copyDirectory(directory, relative = '') {
  for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
    if (entry.isSymbolicLink()) throw Error(`Symbolic link is not a publishable asset: ${entry.name}`);
    const name = path.join(relative, entry.name);
    const from = path.join(source, name);
    if (entry.isDirectory()) { await copyDirectory(from, name); continue; }
    if (!entry.isFile() || entry.name.startsWith('.') || !runtime.has(path.extname(entry.name).toLowerCase())) continue;
    const to = path.join(output, name);
    const stat = await fs.stat(from);
    if (!stat.size) throw Error(`Empty runtime file: ${name}`);
    await fs.mkdir(path.dirname(to), {recursive: true});
    if (entry.name.endsWith('.js')) {
      const text = await fs.readFile(from, 'utf8');
      await fs.writeFile(to, text.replace(/^\/\/# sourceMappingURL=.*$/gm, ''));
    } else await fs.copyFile(from, to);
    copied.push({name, bytes: stat.size});
  }
}

await fs.rm(output, {recursive: true, force: true});
await fs.mkdir(output, {recursive: true});
await copyDirectory(source);
await fs.writeFile(path.join(output, '.nojekyll'), '');
const bytes = copied.reduce((total, file) => total + file.bytes, 0);
console.log(`Prepared ${copied.length} runtime files (${(bytes / 1024 / 1024).toFixed(1)} MiB) in .pages`);
