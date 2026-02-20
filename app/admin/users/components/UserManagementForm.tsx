"use client"

import SelectField from "@/components/forms/SelectField"
import AppButton from "@/components/global/Button"
import { FormField } from "../../grade/subject/components/FormField"

export default function UserManagementForm() {
  return (
    <div className="bg-[#F6F6F6] rounded-3xl p-10 w-full mt-6">

      <h2 className="text-[20px] font-semibold mb-8">
        Create New User
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <SelectField
          label="User Type"
          placeholder="Student"
          options={[
            { label: "Student", value: "student" },
            { label: "Parent", value: "parent" },
          ]}
        />

        <FormField
          label="Full Name"
          placeholder="e.g., Alex Singh"
        />

        <FormField
          label="User Email"
          placeholder="e.g., xyz@gmail.com"
        />

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <FormField
          label="Phone Number"
          placeholder="e.g., 1234567890"
        />

        <FormField
          label="About Me"
          placeholder="Enter something..."
        />

        <SelectField
          label="Grade"
          placeholder="Grade 5"
          options={[
            { label: "Grade 1", value: "1" },
            { label: "Grade 2", value: "2" },
            { label: "Grade 3", value: "3" },
            { label: "Grade 4", value: "4" },
            { label: "Grade 5", value: "5" },
          ]}
        />

      </div>

      {/* Row 3 (Only Status Left Aligned Like Figma) */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="col-span-1">
          <SelectField
            label="Status"
            placeholder="Active"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">

        <AppButton
          ctaText="Add User"
          showIcon={false}
          className="px-6 py-2.5"
        />

        <AppButton
          ctaText="Cancel"
          variant="outline"
          showIcon={false}
          className="px-6 py-2.5"
        />

      </div>

    </div>
  )
}