"use client"

import * as React from "react"
import SelectField from "@/components/forms/SelectField"
import { FormField } from "../../grade/subject/components/FormField"


const PaymentsForm = () => {
  return (
    <div className="bg-[#D9D9D9]/10 rounded-2xl p-6 w-full card-padding">

      {/* Title */}
      <h2 className="text-[18px] font-semibold mb-6">
        Create Subscription Plans
      </h2>

      {/* First Row */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        <FormField
          label="Plan Title"
          placeholder="e.g., Quarterly Plan"
        />

        <FormField
          label="Pricing"
          placeholder="e.g., £3000"
        />

        <SelectField
          label="Usage Limit"
          placeholder="Per 3 months"
          options={[
            { label: "Per month", value: "month" },
            { label: "Per 3 months", value: "3months" },
            { label: "Per year", value: "year" },
          ]}
        />

        <SelectField
          label="Discount"
          placeholder="10 % Off"
          options={[
            { label: "No Discount", value: "0" },
            { label: "10% Off", value: "10" },
            { label: "20% Off", value: "20" },
          ]}
        />

      </div>

      {/* Benefits Section */}
      <div className="mb-6">

        <p className="text-[14px] font-medium mb-3">
          Plan Benefits
        </p>

        <div className="space-y-3">

          {/* <FormField placeholder="Benefit 1" />
          <FormField placeholder="Benefit 2" /> */}

          <button
            type="button"
            className="w-full border border-black rounded-lg py-2 text-[14px] font-medium hover:bg-gray-50 transition"
          >
            Add more
          </button>

        </div>

      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">

        <button
          type="button"
          className="bg-[#D33122] hover:bg-[#B92B1D] text-white text-[16px] font-medium px-5 py-2 rounded-lg transition"
        >
          Create Plan
        </button>

        <button
          type="button"
          className="border border-gray-300 text-black text-[16px] font-medium px-5 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          Cancel
        </button>

      </div>

    </div>
  )
}

export default PaymentsForm