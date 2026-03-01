import { z } from "zod"

export const parentSchema = z.object({
  userType: z.literal("Parent"),
  pronoun: z.string(),
  fullName: z.string().min(2),
  relationship: z.string(),
  enrolledChildren: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  status: z.string(),
  about: z.string().optional(),
})

export type ParentFormValues = z.infer<typeof parentSchema>