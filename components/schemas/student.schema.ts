import { z } from "zod"

export const studentSchema = z.object({
  name: z.string().min(2, "Student name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  grade: z.string().min(1, "Grade is required"),
  about: z.string().optional(),
  phone: z.string().min(10, "Phone number is required"),
  profilePicture: z.string().optional(),
})

export type StudentFormValues = z.infer<typeof studentSchema>