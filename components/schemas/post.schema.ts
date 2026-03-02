import { z } from "zod"

export const postSchema = z.object({
    postType: z.string().min(1, "Post type is required"),
    title: z.string().min(3, "Post title is required"),
    category: z.string().min(1, "Category is required"),
    publishDate: z
        .date()
        .nullable()
        .refine((val) => val instanceof Date, {
            message: "Publish date is required",
        }),
    status: z.enum(["draft", "published", "scheduled"]),
    image: z.instanceof(File).optional(),
    sections: z.array(
        z.object({
            title: z.string().min(1, "Section title required"),
            description: z.string().min(1, "Description required"),
        })
    ),
})

export type PostFormValues = z.infer<typeof postSchema>