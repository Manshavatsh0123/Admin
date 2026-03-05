import { z } from "zod"

export const couponSchema = z.object({
  code: z.string().min(3, "Coupon code must be at least 3 characters"),

  discountValue: z.string().min(1, "Discount value is required"),

  applyOn: z.string().min(1, "Please select where coupon applies"),

  expiryDate: z.date().nullable().optional(),

  usageLimit: z
    .number()
    .min(1, "Usage limit must be greater than 0"),
})

export type CouponFormValues = z.infer<typeof couponSchema>