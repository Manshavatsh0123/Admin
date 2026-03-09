import { z } from "zod"

export const parentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  about: z.string().optional(),
  relationship: z.string().min(1, "Relationship is required"),
  phone: z.string().min(10, "Phone number required"),
  profilePicture: z.string().optional(),
})

export type ParentFormValues = z.infer<typeof parentSchema>