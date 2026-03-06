"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Pencil, Trash2 } from "lucide-react"

import {
  resourceSchema,
  ResourceFormValues
} from "@/components/schemas/resource.schema"

import { RHFField } from "@/components/forms/RHFField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"

type Resource = {
  id: number
  title: string
}

export default function Resources() {

  const [resources, setResources] = useState<Resource[]>([
    { id: 1, title: "Algebra PDF" }
  ])

  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      chapter: ""
    }
  })

  const onSubmit = (data: ResourceFormValues) => {

    const newResource: Resource = {
      id: Date.now(),
      title: data.title
    }

    setResources(prev => [...prev, newResource])

    form.reset()
  }

  return (
    <div className="bg-[#F6F6F6] rounded-3xl p-8 w-full mt-6">

      {/* Header */}
      <button className="flex items-center gap-2 bg-[#D33122] text-white px-5 py-2 rounded-lg text-[14px] font-medium">
        <Plus size={16} />
        New Resource
      </button>

      {/* Form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 space-y-6"
      >

        <div className="grid grid-cols-2 gap-6">

          <RHFField
            name="title"
            label="Resource title"
            placeholder="e.g., Algebra PDF"
            control={form.control}
          />

          <RHFField
            name="chapter"
            label="Chapter"
            type="select"
            control={form.control}
            options={[
              { label: "Algebra", value: "algebra" },
              { label: "Linear Equations", value: "linear" }
            ]}
          />

        </div>

        {/* Upload */}
        <FileUpload
          label="Upload Resource Materials"
          variant="large"
          description="Upload Resources Files"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
          preview
        // onChange={(file: File) =>
        //   form.setValue("file", file)
        // }
        />

        <div className="flex gap-3">

          <AppButton
            type="submit"
            ctaText="Add Resource"
            showIcon={false}
          />

          <AppButton
            type="button"
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
            onClick={() => form.reset()}
          />

        </div>

      </form>

      {/* Resource List */}
      <div className="mt-8 space-y-3">

        {resources.map(resource => (

          <div
            key={resource.id}
            className="flex items-center justify-between border rounded-xl px-4 py-3 bg-white"
          >

            <p className="text-[14px] font-medium">
              {resource.title}
            </p>

            <div className="flex items-center gap-4">

              <Pencil
                size={16}
                className="cursor-pointer"
              />

              <Trash2
                size={16}
                className="text-[#D33122] cursor-pointer"
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}