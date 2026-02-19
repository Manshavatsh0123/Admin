"use client"

import * as React from "react"
import SelectField from "@/components/forms/SelectField"
import AppButton from "@/components/global/Button"
import { FormField } from "../../grade/subject/components/FormField"

export default function BadgeForm() {

  return (
    <div className="bg-[#F6F6F6] rounded-3xl p-8 w-full mt-6.5 space-y-10">

      {/* ================= Create New Badge ================= */}
      <div>

        <h2 className="text-[18px] font-semibold mb-6">
          Create New Badge
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <FormField
            label="Badge Name"
            placeholder="e.g., Champion"
          />

          <FormField
            label="Task"
            placeholder="e.g., Complete all courses"
          />

          <SelectField
            label="Status"
            placeholder="Unlock"
            options={[
              { label: "Unlock", value: "unlock" },
              { label: "Lock", value: "lock" },
            ]}
          />

        </div>

        <div className="flex items-center gap-4 mt-6">
          <AppButton
            ctaText="Create Badge"
            showIcon={false}
          />

          <AppButton
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
          />
        </div>

      </div>

      {/* ================= Create New Reward ================= */}
      <div>

        <h2 className="text-[18px] font-semibold mb-6">
          Create New Reward
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <FormField
            label="Reward Name"
            placeholder="e.g., Perfect Quiz"
          />

          <FormField
            label="Task"
            placeholder="e.g., Complete all courses"
          />

          <FormField
            label="Points"
            placeholder="e.g., 50"
          />

        </div>

        <div className="flex items-center gap-4 mt-6">
          <AppButton
            ctaText="Create Reward"
            showIcon={false}
          />

          <AppButton
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
          />
        </div>

      </div>

    </div>
  )
}
