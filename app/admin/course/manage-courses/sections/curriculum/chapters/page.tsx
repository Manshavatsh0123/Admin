"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Pencil, Trash2 } from "lucide-react"

import {
  chapterSchema,
  ChapterFormValues,
} from "@/components/schemas/chapter.schema"

import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"
import apiClient from "@/lib/network"

type Chapter = {
  id: string
  chapterName: string
  duration: string
}

export default function ChaptersPage() {

  const [chapters, setChapters] = useState<Chapter[]>([])
  const [courseId, setCourseId] = useState<string | null>(null)

  useEffect(() => {
    const id = localStorage.getItem("courseId")
    setCourseId(id)
  }, [])

  const form = useForm<ChapterFormValues>({
    resolver: zodResolver(chapterSchema),
    defaultValues: {
      chapterName: "",
      duration: "",
    },
  })

  const createChapterMutation = useMutation({

    mutationKey: ["createChapter"],

    mutationFn: async (data: ChapterFormValues) => {

      const token = localStorage.getItem("token")

      if (!courseId) {
        throw new Error("Course ID not found. Please create a course first.")
      }

      const payload = {
        name: data.chapterName,
        duration: data.duration
      }

      console.log("COURSE ID:", courseId)
      console.log("PAYLOAD:", payload)

      const response = await apiClient.post(
        `/courses/${courseId}/chapters`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )

      return response.data
    },

    onSuccess(data) {

      console.log("Chapter Created:", data)

      const newChapter: Chapter = {
        id: data.id,
        chapterName: data.name,
        duration: data.duration,
      }

      setChapters(prev => [...prev, newChapter])

      form.reset()
    },

    onError(error: any) {

      console.log("FULL ERROR:", error)

      if (error?.response) {
        console.log("STATUS:", error.response.status)
        console.log("BACKEND MESSAGE:", error.response.data)
      } else {
        console.log("UNKNOWN ERROR:", error.message)
      }

    }

  })

  const onSubmit = (data: ChapterFormValues) => {
    createChapterMutation.mutate(data)
  }

  return (
    <div className="px-8">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 space-y-6"
      >

        <div className="grid grid-cols-2 gap-6">

          <RHFField
            name="chapterName"
            label="Chapter Name"
            placeholder="Algebra"
            control={form.control}
          />

          <RHFField
            name="duration"
            label="Duration"
            placeholder="5"
            control={form.control}
          />

        </div>

        <div className="flex items-center gap-3">

          <AppButton
            type="submit"
            ctaText={
              createChapterMutation.isPending
                ? "Creating..."
                : "Add Chapter"
            }
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

      {/* Chapters List */}

      <div className="mt-8 space-y-3">

        {chapters.map((chapter) => (

          <div
            key={chapter.id}
            className="flex items-center justify-between border rounded-xl px-4 py-3 bg-white"
          >

            <p className="text-[14px] font-medium">
              {chapter.chapterName}
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