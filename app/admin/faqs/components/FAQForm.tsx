"use client"
import * as React from "react"
import AppButton from "@/components/global/Button"
import { FormField } from "../../grade/subject/components/FormField"

const FAQForm = () => {

  const [form, setForm] = React.useState({
    question: "",
    answer: "",
    category: "",
  })

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full mt-6">

      {/* Heading */}
      <h2 className="text-[18px] font-semibold text-[#1E1E1E] mb-6">
        Create New FAQ
      </h2>

      {/* Question */}
      <div className="mb-5">
        <FormField
          label="Question"
          placeholder="What is your question?"
          value={form.question}
          onChange={(value) => handleChange("question", value)}
        />
      </div>

      {/* Answer */}
      <div className="mb-5">
        <FormField
          label="Answer"
          placeholder="Provide a detailed answer..."
          type="textarea"
          value={form.answer}
          onChange={(value) => handleChange("answer", value)}
        />
      </div>

      {/* Category */}
      <div className="mb-6 max-w-[400px]">
        <FormField
          label="Category Name"
          placeholder="Enter category name"
          value={form.category}
          onChange={(value) => handleChange("category", value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">

        <AppButton
          ctaText="Create FAQ"
          showIcon={false}
          className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
        />

        <AppButton
          ctaText="Cancel"
          variant="outline"
          showIcon={false}
          className="px-5 py-2 rounded-lg text-[14px]"
        />

      </div>

    </div>
  )
}

export default FAQForm
