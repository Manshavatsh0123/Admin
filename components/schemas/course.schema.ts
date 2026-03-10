import { z } from "zod"

export const courseSchema = z.object({
  grade: z.string().min(1, "Grade is required"),

  courseName: z.string().min(2, "Course name is required"),

  coursePrice: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Course price must be greater than 0")
  ),

  discountedPrice: z.preprocess(
    (val) => Number(val),
    z.number().min(0, "Discounted price must be valid")
  ),

  status: z.enum(["active", "inactive"]),

  duration: z.string().min(1, "Duration is required"),

  description: z.string().min(5, "Short description is required"),

  subjectIcon: z.any().optional(),
})

export type CourseFormValues = z.infer<typeof courseSchema>