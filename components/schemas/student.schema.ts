import { z } from "zod"

export const studentSchema = z.object({
  userType: z.literal("Student"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  grade: z.string().min(1, "Grade is required"),
  status: z.string(),
  about: z.string().optional(),
})

export type StudentFormValues = z.infer<typeof studentSchema>