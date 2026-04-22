import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import grayMatter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

// .website/ lives inside the vault, so vault root is one level up.
// Override with VAULT_PATH env var if needed.
const VAULT_PATH = process.env.VAULT_PATH
  ? path.resolve(process.cwd(), process.env.VAULT_PATH)
  : path.resolve(PROJECT_ROOT, '..');

const BLOG_SOURCE  = path.join(VAULT_PATH, 'Blog');
const BLOG_DEST    = path.join(PROJECT_ROOT, 'src', 'content', 'blog');
const PLACEHOLDER  = path.join(BLOG_DEST, '_placeholder.md');

async function findMarkdown(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const results = await Promise.all(
      entries.map(async (e) => {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
          if (e.name.startsWith('.') || e.name === 'node_modules') return [];
          return findMarkdown(full);
        }
        return (e.name.endsWith('.md') || e.name.endsWith('.mdx')) ? [full] : [];
      }),
    );
    return results.flat();
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

function shouldPublish({ data }) {
  if (Object.prototype.hasOwnProperty.call(data, 'draft')) return !data.draft;
  return data.publish === true || data.published === true;
}

async function main() {
  // Clean and recreate dest
  await fs.rm(BLOG_DEST, { recursive: true, force: true });
  await fs.mkdir(BLOG_DEST, { recursive: true });

  // Placeholder so Astro's content collection never sees an empty dir
  await fs.writeFile(
    PLACEHOLDER,
    '---\ntitle: placeholder\npublish: false\nno_index: true\ncreated_date: 1970-01-01\n---\n',
  );

  const files = await findMarkdown(BLOG_SOURCE);
  let copied = 0;
  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    if (!shouldPublish(grayMatter(raw))) continue;
    await fs.copyFile(file, path.join(BLOG_DEST, path.basename(file)));
    copied++;
  }

  console.log(`Synced ${copied} post(s) from ${BLOG_SOURCE}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
