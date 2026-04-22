// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://devanshmahajan.pages.dev',
  integrations: [expressiveCode(), mdx(), sitemap()],
  output: 'static',
});
