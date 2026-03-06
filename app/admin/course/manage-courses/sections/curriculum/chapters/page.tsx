"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil, Trash2, Plus } from "lucide-react"

import {
  chapterSchema,
  ChapterFormValues,
} from "@/components/schemas/chapter.schema"

import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

type Chapter = {
  id: number
  chapterName: string
  duration: string
}

const chaptersPage = () => {

  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: 1,
      chapterName: "Linear Equations & Systems",
      duration: "1-2 hours",
    },
  ])

  const form = useForm<ChapterFormValues>({
    resolver: zodResolver(chapterSchema),
    defaultValues: {
      chapterName: "",
      duration: "",
    },
  })

  const onSubmit = (data: ChapterFormValues) => {

    const newChapter: Chapter = {
      id: Date.now(),
      ...data,
    }

    setChapters((prev) => [...prev, newChapter])

    form.reset()
  }

  return (
    <div className="px-8">

      {/* New Chapter Button */}
      <AppButton
        type="submit"
        ctaText="New Chapter"
        className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
      />

      {/* Form */}
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
            placeholder="1-2 hours"
            control={form.control}
          />

        </div>

        <div className="flex items-center gap-3">
          <AppButton
            type="submit"
            ctaText="Update"
            showIcon={false}
            className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
          />

          <AppButton
            type="button"
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
            className="px-5 py-2 rounded-lg text-[14px]"
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

export default chaptersPage