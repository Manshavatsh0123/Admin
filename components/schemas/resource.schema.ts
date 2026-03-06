import { z } from "zod"

export const resourceSchema = z.object({
  title: z.string().min(2, "Resource title is required"),

  chapter: z.string().min(1, "Chapter is required"),

  file: z.instanceof(File, {
    message: "Resource file is required"
  }).optional()
})

export type ResourceFormValues = z.infer<typeof resourceSchema>