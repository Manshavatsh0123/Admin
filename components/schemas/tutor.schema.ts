import { z } from "zod"

export const tutorSchema = z.object({
  pronoun: z.string().min(1, "Pronoun is required"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  joinDate: z.string().min(1, "Join date is required"),

  specialization: z.string().min(1, "Specialization is required"),
  grade: z.string().min(1, "Grade is required"),
  experience: z.string().min(1, "Experience is required"),
  qualifications: z.string().min(1, "Qualification is required"),

  status: z.string(),
  about: z.string().optional(),
})

export type TutorFormValues = z.infer<typeof tutorSchema>