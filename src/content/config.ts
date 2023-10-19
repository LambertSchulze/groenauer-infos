import { defineCollection, z } from 'astro:content';

const termine = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title:     z.string(),
        subtitle:  z.string().optional(),
        date:      z.string(),
        dateEnd:   z.string().optional(),
        time:      z.string(),
        timeEnd:   z.string().optional(),
        image:     z.string().optional(),
        place:     z.string(),
        price:     z.string().optional(),
        price_info: z.string().optional(),
        artist:    z.string().optional(),
        organiser: z.string().optional(),
	}),
});

export const collections = { termine };
