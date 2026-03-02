import { z } from "zod"

export const notificationSchema = z.object({
  title: z.string().min(3, "Title is required"),
  message: z.string().min(5, "Message is required"),
  sendTo: z.enum(["all", "students", "tutors", "parents"]),
  channel: z.enum(["email", "dashboard", "both"]),
})

export type NotificationFormValues = z.infer<typeof notificationSchema>