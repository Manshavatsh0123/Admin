import { z } from "zod"

export const badgeSchema = z.object({
  badgeName: z.string().min(2, "Badge name is required"),
  task: z.string().min(3, "Task is required"),
  status: z.enum(["unlock", "lock"]),
})

export type BadgeFormValues = z.infer<typeof badgeSchema>


export const rewardSchema = z.object({
  rewardName: z.string().min(2, "Reward name is required"),
  task: z.string().min(3, "Task is required"),
  points: z.coerce
    .number()
    .min(1, "Points must be greater than 0"),
})

export type RewardFormValues = z.infer<typeof rewardSchema>