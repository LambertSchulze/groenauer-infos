import { defineCollection, reference, z } from 'astro:content';

const termine = defineCollection({
    type:   'content',
	schema: z.object({
		title:      z.string(),
        subtitle:   z.string().optional(),
        date:       z.string(),
        dateEnd:    z.string().optional(),
        time:       z.string().optional(),
        timeEnd:    z.string().optional(),
        image:      z.string().optional(),
        cardLayout: z.string().optional(),
        categories: z.array(z.string()).optional(),
        place:      reference('orte'),
        place_info: z.string().optional(),
        price:      z.string().optional(),
        price_info: z.string().optional(),
        artist:     z.string().optional(),
        organiser:  z.string().optional(),
        source:     z.string().optional(),
        source_url: z.string().url().optional()
	}),
});

const orte = defineCollection({
    type:   'data',
    schema: z.object({
        name:    z.string(),
        address: z.object({
            street:       z.string(),
            house_number: z.string(),
            postal_code:  z.number(),
            city:         z.string()
        }),
        map:     z.string().optional()
    })
})

export const collections = { termine, orte };
