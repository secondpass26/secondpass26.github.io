import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Brain & Focus', 'Development', 'Life']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    weight_start: z.number().optional(),
    weight_current: z.number().optional(),
    weight_target: z.number().optional(),
    neetcode_current: z.number().optional(),
    neetcode_target: z.number().optional(),
    run_current: z.number().optional(),
    run_target: z.number().optional(),
    job_status: z.string().optional(),
    project_status: z.string().optional(),
    second_pass_status: z.string().optional(),
    cpp_status: z.string().optional(),
    hft_status: z.string().optional(),
    feature_title: z.string().optional(),
    feature_intro: z.string().optional(),
    wishlist_levels: z.array(z.object({
      number: z.string(),
      title: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({
        name: z.string(),
        completed: z.boolean().default(false),
      })),
    })).optional(),
  }),
});

export const collections = { posts, pages };
