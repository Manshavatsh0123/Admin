"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  faqSchema,
  FAQFormValues,
} from "@/components/schemas/faq.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

export default function FAQForm() {

  const form = useForm<FAQFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: "",
      answer: "",
      category: "",
    },
  })

  const onSubmit = (data: FAQFormValues) => {
    console.log("FAQ Data:", data)

    // Later API:
    // await fetch("/api/faq", { method: "POST", body: JSON.stringify(data) })

    form.reset()
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full mt-6">

      <h2 className="text-[18px] font-semibold text-[#1E1E1E] mb-6">
        Create New FAQ
      </h2>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Question */}
        <RHFField
          name="question"
          label="Question"
          placeholder="What is your question?"
          control={form.control}
        />

        {/* Answer */}
        <RHFField
          name="answer"
          label="Answer"
          type="textarea"
          placeholder="Provide a detailed answer..."
          control={form.control}
        />

        {/* Category */}
        <div className="max-w-[400px]">
          <RHFField
            name="category"
            label="Category Name"
            placeholder="Enter category name"
            control={form.control}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">

          <AppButton
            type="submit"
            ctaText="Create FAQ"
            showIcon={false}
            className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
          />

          <AppButton
            type="button"
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
            className="px-5 py-2 rounded-lg text-[14px]"
            onClick={() => form.reset()}
          />

        </div>

      </form>

    </div>
  )
}