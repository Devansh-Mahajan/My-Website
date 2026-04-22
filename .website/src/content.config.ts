import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const dateSchema = z.preprocess((val) => {
	if (!val) return null;
	const date = new Date(val);
	return isNaN(date.getTime()) ? null : date;
}, z.date().nullable().default(() => new Date()));

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional().nullable(),
		description: z.string().optional().nullable(),
		publish: z.boolean().default(true),
		created_date: dateSchema,
		updated_date: dateSchema,
		featured_image: z.string().optional().nullable(),
		featured_image_alt: z.string().optional().nullable(),
		slug: z.string().optional().nullable(),
		tags: z.array(z.string()).default([]).nullable(),
		keywords: z.array(z.string()).default([]).nullable(),
		author: z.string().optional().nullable(),
		no_index: z.boolean().default(false),
		enable_comments: z.boolean().default(true),
	}),
});

export const collections = { blog };
