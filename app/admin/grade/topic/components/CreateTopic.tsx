"use client"

import * as React from "react"

import { FormField } from "../../subject/components/FormField"
import SelectField from "@/components/forms/SelectField"
import AppButton from "@/components/global/Button"

import { Plus } from "lucide-react"

export default function CreateTopic() {

  const [videoLinks, setVideoLinks] = React.useState([
    { url: "", description: "" },
    { url: "", description: "" },
  ])

  const handleAddLink = () => {
    setVideoLinks([
      ...videoLinks,
      { url: "", description: "" }
    ])
  }

  const handleChange = (
    index: number,
    field: "url" | "description",
    value: string
  ) => {
    const updated = [...videoLinks]
    updated[index][field] = value
    setVideoLinks(updated)
  }
  return (
    <div className="bg-[#F6F6F6] rounded-3xl section-padding w-full card-padding">

      {/* Title */}
      <h2 className="text-[20px] font-semibold mb-8">
        Create New Topic
      </h2>

      {/* Top Grid */}
      <div className="grid grid-cols-4 gap-x-5 gap-y-6">

        {/* Topic Name */}
        <FormField
          label="Topic Name"
          placeholder="e.g., Introduction to Algebra"
        />

        {/* Select Chapter */}
        <SelectField
          label="Select Chapter"
          placeholder="Select chapter"
          options={[
            { label: "Algebra", value: "algebra" },
            { label: "Geometry", value: "geometry" },
          ]}
        />

        {/* Select Subject */}
        <SelectField
          label="Select Subject"
          placeholder="Select subject"
          options={[
            { label: "Mathematics", value: "math" },
            { label: "Science", value: "science" },
          ]}
        />

        {/* Status */}
        <SelectField
          label="Status"
          placeholder="Select status"
          options={[
            { label: "Active", value: "active" },
            { label: "Draft", value: "draft" },
          ]}
        />

      </div>

      {/* Video Links Section */}
      <div className="mt-8 space-y-4">

        {/* ROW 1 → Labels */}
        <div className="grid grid-cols-[1fr_1fr_240px] gap-x-5">

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Course Video Link 1
            </label>
            <FormField
              label=""
              placeholder="Enter video URL..."
              value={videoLinks[0]?.url || ""}
              onChange={(value) =>
                handleChange(0, "url", value)
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Course Video Link 2
            </label>
            <FormField
              label=""
              placeholder="Enter video URL..."
              value={videoLinks[1]?.url || ""}
              onChange={(value) =>
                handleChange(1, "url", value)
              }
            />
          </div>

          {/* Add Link Button */}
          <div className="flex items-end">
            <button
              onClick={handleAddLink}
              className="w-[240px] flex items-center justify-center gap-2 border border-gray-300 rounded-[10px] px-6 py-[10px] text-[14px] font-medium hover:bg-gray-50 transition">
              <Plus size={18} strokeWidth={1.5} />
              Add Link
            </button>
          </div>

        </div>

        {/* ROW 2 → Description fields */}
        <div className="grid grid-cols-[1fr_1fr_240px] gap-x-5">

          <FormField
            label=""
            placeholder="Enter description..."
            value={videoLinks[0]?.description || ""}
            onChange={(value) =>
              handleChange(0, "description", value)
            }
          />

          <FormField
            label=""
            placeholder="Enter description..."
            value={videoLinks[1]?.description || ""}
            onChange={(value) =>
              handleChange(1, "description", value)
            }
          />

          <div />

        </div>

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
