import { z } from "zod"

export const assessmentSchema = z.object({
  title: z.string().min(2, "Assessment title is required"),

  course: z.string().min(1, "Course is required"),

  options: z.coerce.number().min(1, "Options required"),

  duration: z.string().min(1, "Duration required"),

  passingScore: z.coerce.number().min(1, "Passing score required"),

  description: z.string().min(3, "Description required"),

  instructions: z.string().min(3, "Instructions required"),

  questionBank: z.instanceof(File).optional()
})

export type AssessmentFormValues = z.infer<typeof assessmentSchema>