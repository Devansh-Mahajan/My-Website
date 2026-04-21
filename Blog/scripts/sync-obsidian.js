import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import grayMatter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const ASTRO_BLOG_PATH = path.join(PROJECT_ROOT, 'src/content/blog');
const LEGACY_NOTES_PATH = path.join(PROJECT_ROOT, 'src/content/notes');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const BLOG_SOURCE_PATH = path.join(PROJECT_ROOT, 'Blog');
const BLOG_PLACEHOLDER_PATH = path.join(ASTRO_BLOG_PATH, '_placeholder.md');

const GENERATED_PUBLIC_PATHS = [
	path.join(PUBLIC_DIR, 'attachments'),
	path.join(PUBLIC_DIR, 'notes-index.json'),
	path.join(PUBLIC_DIR, 'notes-backlinks.json'),
];

async function cleanDirectory(dir) {
	await fs.rm(dir, { recursive: true, force: true });
	await fs.mkdir(dir, { recursive: true });
}

async function ensurePlaceholder() {
	const placeholder = [
		'---',
		'title: Hidden placeholder',
		'publish: false',
		'no_index: true',
		'created_date: 1970-01-01',
		'---',
		'',
	].join('\n');

	await fs.mkdir(ASTRO_BLOG_PATH, { recursive: true });
	await fs.writeFile(BLOG_PLACEHOLDER_PATH, placeholder, 'utf8');
}

async function findMarkdownFiles(dir) {
	try {
		const entries = await fs.readdir(dir, { withFileTypes: true });
		const files = await Promise.all(
			entries.map(async (entry) => {
				const fullPath = path.join(dir, entry.name);
				if (entry.isDirectory()) {
					if (entry.name.startsWith('.') || entry.name === 'node_modules') {
						return [];
					}
					return findMarkdownFiles(fullPath);
				}
				return entry.name.endsWith('.md') || entry.name.endsWith('.mdx') ? [fullPath] : [];
			}),
		);
		return files.flat();
	} catch (error) {
		if (error.code === 'ENOENT') {
			return [];
		}
		throw error;
	}
}

function shouldPublish(frontmatter) {
	if (Object.prototype.hasOwnProperty.call(frontmatter, 'draft')) {
		return !frontmatter.draft;
	}
	return frontmatter.publish === true || frontmatter.published === true;
}

async function copyPublishedWriting() {
	const files = await findMarkdownFiles(BLOG_SOURCE_PATH);
	let copied = 0;

	for (const file of files) {
		const source = await fs.readFile(file, 'utf8');
		const parsed = grayMatter(source);
		if (!shouldPublish(parsed.data)) {
			continue;
		}

		await fs.copyFile(file, path.join(ASTRO_BLOG_PATH, path.basename(file)));
		copied += 1;
	}

	console.log(`Synced ${copied} published writing file(s).`);
}

async function main() {
	await cleanDirectory(ASTRO_BLOG_PATH);
	await fs.rm(LEGACY_NOTES_PATH, { recursive: true, force: true });
	await Promise.all(GENERATED_PUBLIC_PATHS.map((entry) => fs.rm(entry, { recursive: true, force: true })));
	await ensurePlaceholder();
	await copyPublishedWriting();
	console.log('Landing content sync complete. Notes remain on Quartz.');
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
