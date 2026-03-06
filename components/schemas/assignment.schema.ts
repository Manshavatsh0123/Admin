import { z } from "zod"

export const assignmentSchema = z.object({
  title: z.string().min(2, "Assignment title is required"),
  course: z.string().min(1, "Course is required"),
  options: z.coerce.number().min(1, "Options required"),
  duration: z.string().min(1, "Duration is required"),
  passingScore: z.coerce.number().min(1, "Passing score required"),
  description: z.string().min(3, "Description required"),
  instructions: z.string().min(3, "Instructions required"),
  questionBank: z.instanceof(File).optional()
})

export type AssignmentFormValues = z.infer<typeof assignmentSchema>