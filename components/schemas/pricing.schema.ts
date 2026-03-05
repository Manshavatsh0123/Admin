import { z } from "zod"

export const pricingSchema = z.object({
  pricingType: z.enum(["paid", "free"]),

  coursePrice: z.coerce
    .number()
    .min(0, "Course price must be valid"),

  discountedPrice: z.coerce
    .number()
    .min(0, "Discounted price must be valid"),

  expiryType: z.enum(["limited", "lifetime"]),

  numberOfMonths: z.coerce
    .number()
    .min(1, "Months must be at least 1"),
})

export type PricingFormValues = z.infer<typeof pricingSchema>