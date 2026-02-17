"use client"

import * as React from "react"
import { FormField } from "./FormField"
import SelectField from "@/components/forms/SelectField"
import TextAreaField from "@/components/forms/TextAreaField"
import DynamicInputList from "@/components/forms/DynamicInputList"
import FormSection from "@/components/forms/FormSection"
import AppButton from "@/components/global/Button"
import FileUpload from "@/components/forms/Select"


export default function CreateSubjectForm() {
  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-8 w-full card-padding">

      {/* Title */}
      <h2 className="text-[20px] font-semibold mb-8">
        Create New Subject
      </h2>

      {/* Top Grid */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-6">

        <FormField
          label="Subject Name"
          placeholder="e.g., Mathematics"
        />

        <SelectField
          label="Subject Level"
          placeholder="Select level"
          options={[
            { label: "GCSE", value: "gcse" },
            { label: "A-Level", value: "alevel" },
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

        <FormSection>
          <FileUpload
            label="Subject Icon"
            variant="small"
          />
        </FormSection>

        <SelectField
          label="Duration"
          placeholder="Select duration"
          options={[
            { label: "5 Weeks", value: "5weeks" },
            { label: "10 Weeks", value: "10weeks" },
          ]}
        />

        <FormField
          label="Total Chapters"
          type="number"
          placeholder="e.g., 22"
        />

      </div>

      {/* Course Overview */}
      <div className="mt-8">
        <TextAreaField
          label="Course Overview"
          placeholder="Enter course details..."
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

        <DynamicInputList
          label="What you'll learn"
          placeholder="Enter learning"
        />

        <DynamicInputList
          label="Course Objectives"
          placeholder="Objective"
        />

      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-10">
        <AppButton ctaText="Create Subject" showIcon={false} />
        <AppButton
          ctaText="Cancel"
          variant="outline"
          showIcon={false}
        />
      </div>

    </div>
  )
}
