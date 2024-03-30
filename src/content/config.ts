import { defineCollection, z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

export const collections = { blog };
