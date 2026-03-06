import { z } from "zod"

export const topicSchema = z.object({
  chapter: z.string().min(1, "Chapter is required"),

  topicName: z.string().min(2, "Topic name is required"),

  videoUrl: z
    .string()
    .url("Enter a valid URL")
    .optional()
    .or(z.literal("")),

  description: z
    .string()
    .min(3, "Description is required"),
})

export type TopicFormValues = z.infer<typeof topicSchema>