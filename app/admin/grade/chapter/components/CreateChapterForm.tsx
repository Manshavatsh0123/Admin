"use client"

import * as React from "react"

import {FormField} from "../../subject/components/FormField"
import SelectField from "@/components/forms/SelectField"
import FileUpload from "@/components/forms/Select"

import AppButton from "@/components/global/Button"

export default function CreateChapterForm() {
  return (
    <div className="bg-[#F6F6F6] rounded-3xl section-padding w-full card-padding">

      {/* Title */}
      <h2 className="text-[20px] font-semibold mb-8">
        Create New Chapter
      </h2>

      {/* Top Grid */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-6">

        <FormField
          label="Chapter Name"
          placeholder="e.g., Algebra Basics"
        />

        <SelectField
          label="Select Subject"
          placeholder="Select subject"
          options={[
            { label: "Mathematics", value: "math" },
            { label: "Science", value: "science" },
          ]}
        />

        <SelectField
          label="Chapter Duration"
          placeholder="Select duration"
          options={[
            { label: "1 Hour", value: "1hour" },
            { label: "2 Hours", value: "2hour" },
          ]}
        />

        <SelectField
          label="Status"
          placeholder="Select status"
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />

      </div>

      {/* Resource Upload */}
      <div className="mt-8">
        <FileUpload
          label="Upload Resource Materials"
          variant="large"
          description="PDF, DOCX, PPTX, images, etc."
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          preview={false}
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-10">
        <AppButton ctaText="Create Chapter" showIcon={false} />
        <AppButton
          ctaText="Cancel"
          variant="outline"
          showIcon={false}
        />
      </div>

    </div>
  )
}
