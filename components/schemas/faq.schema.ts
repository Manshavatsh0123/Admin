import { z } from "zod"

export const faqSchema = z.object({
  question: z
    .string()
    .min(5, "Question must be at least 5 characters"),

  answer: z
    .string()
    .min(10, "Answer must be at least 10 characters"),

  category: z
    .string()
    .min(2, "Category is required"),
})

export type FAQFormValues = z.infer<typeof faqSchema>