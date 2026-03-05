import { z } from "zod"

export const chapterSchema = z.object({
  chapterName: z
    .string()
    .min(2, "Chapter name is required"),

  duration: z
    .string()
    .min(1, "Duration is required"),
})

export type ChapterFormValues = z.infer<typeof chapterSchema>