"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Plus, Pencil, Trash2 } from "lucide-react"

import {
  resourceSchema,
  ResourceFormValues
} from "@/components/schemas/resource.schema"

import { RHFField } from "@/components/forms/RHFField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"
import apiClient from "@/lib/network"

type Resource = {
  id: string
  title: string
}

export default function Resources() {

  const [resources, setResources] = useState<Resource[]>([])

  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      chapter: ""
    }
  })

  /* ---------------- GET CHAPTERS ---------------- */

  const { data: chaptersData } = useQuery({

    queryKey: ["chapters"],

    queryFn: async () => {

      const token = localStorage.getItem("token")
      const courseId = localStorage.getItem("courseId")

      const response = await apiClient.get(
        `/courses/${courseId}/chapters`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      return response.data
    }

  })

  const chapterOptions =
    chaptersData?.map((chapter: any) => ({
      label: chapter.name,
      value: chapter.id
    })) || []

  /* ---------------- CREATE RESOURCE ---------------- */

  const createResourceMutation = useMutation({

    mutationKey: ["createResource"],

    mutationFn: async (data: ResourceFormValues) => {

      const token = localStorage.getItem("token")
      const courseId = localStorage.getItem("courseId")

      const payload = {
        title: data.title
      }

      console.log("COURSE:", courseId)
      console.log("CHAPTER:", data.chapter)
      console.log("PAYLOAD:", payload)

      const response = await apiClient.post(
        `/courses/${courseId}/chapters/${data.chapter}/resources`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      return response.data
    },

    onSuccess(data) {

      const newResource: Resource = {
        id: data.id,
        title: data.title
      }

      setResources(prev => [...prev, newResource])

      form.reset()
    },

    onError(error: any) {
      console.log("RESOURCE ERROR:", error?.response?.data)
    }

  })

  const onSubmit = (data: ResourceFormValues) => {
    createResourceMutation.mutate(data)
  }

  return (
    <div className="px-8">

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
            options={chapterOptions}
          />

        </div>

        {/* Upload */}
        <FileUpload
          label="Upload Resource Materials"
          variant="large"
          description="Upload Resources Files"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
          preview
        />

        <div className="flex gap-3">

          <AppButton
            type="submit"
            ctaText={
              createResourceMutation.isPending
                ? "Adding..."
                : "Add Resource"
            }
            showIcon={false}
            className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
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