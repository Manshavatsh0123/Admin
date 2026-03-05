"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  pricingSchema,
  PricingFormValues,
} from "@/components/schemas/pricing.schema"

import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

export default function PricingForm() {

  const form = useForm({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      pricingType: "paid",
      coursePrice: 50,
      discountedPrice: 30,
      expiryType: "limited",
      numberOfMonths: 5,
    },
  })

  const onSubmit = (data: PricingFormValues) => {
    console.log("Pricing Data:", data)
  }

  return (
    <div className="px-8">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >

        <div className="grid grid-cols-3 gap-6">

          <RHFField
            name="pricingType"
            label="Pricing Type"
            type="select"
            control={form.control}
            options={[
              { label: "Paid", value: "paid" },
              { label: "Free", value: "free" },
            ]}
          />

          <RHFField
            name="coursePrice"
            label="Course Price"
            type="number"
            control={form.control}
          />

          <RHFField
            name="discountedPrice"
            label="Discounted Price"
            type="number"
            control={form.control}
          />

          <RHFField
            name="expiryType"
            label="Expiry Date"
            type="select"
            control={form.control}
            options={[
              { label: "Limited time", value: "limited" },
              { label: "Lifetime", value: "lifetime" },
            ]}
          />

          <RHFField
            name="numberOfMonths"
            label="Number of Months"
            type="number"
            control={form.control}
          />

        </div>

        <div className="flex items-center gap-4">
          <AppButton
            type="submit"
            ctaText="Update"
            showIcon={false}
            className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
          />

          <AppButton
            type="button"
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
            className="px-5 py-2 rounded-lg text-[14px]"
          />
        </div>

      </form>

    </div>
  )
}