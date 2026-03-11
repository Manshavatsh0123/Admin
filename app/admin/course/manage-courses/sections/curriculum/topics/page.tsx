"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Plus, Pencil, Trash2 } from "lucide-react"

import {
  topicSchema,
  TopicFormValues
} from "@/components/schemas/topic.schema"

import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"
import apiClient from "@/lib/network"

type Topic = {
  id: string
  topicName: string
}

export default function Topics() {

  const [topics, setTopics] = useState<Topic[]>([])

  const form = useForm<TopicFormValues>({
    resolver: zodResolver(topicSchema),
    defaultValues: {
      chapter: "",
      topicName: "",
      videoUrl: "",
      description: "",
    },
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

  /* Convert chapters to dropdown options */

  const chapterOptions =
    chaptersData?.map((chapter: any) => ({
      label: chapter.name,
      value: chapter.id
    })) || []

  /* ---------------- CREATE TOPIC ---------------- */

  const createTopicMutation = useMutation({

    mutationKey: ["createTopic"],

    mutationFn: async (data: TopicFormValues) => {

      const token = localStorage.getItem("token")
      const courseId = localStorage.getItem("courseId")

      const payload = {
        name: data.topicName,
        videoUrl: data.videoUrl,
        description: data.description
      }

      console.log("COURSE:", courseId)
      console.log("CHAPTER:", data.chapter)
      console.log("PAYLOAD:", payload)

      const response = await apiClient.post(
        `/courses/${courseId}/chapters/${data.chapter}/topics`,
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

      console.log("Topic Created:", data)

      const newTopic: Topic = {
        id: data.id,
        topicName: data.name
      }

      setTopics(prev => [...prev, newTopic])

      form.reset()
    },

    onError(error: any) {

      console.log("FULL ERROR:", error)
      console.log("BACKEND ERROR:", error?.response?.data)

    }

  })

  const onSubmit = (data: TopicFormValues) => {
    createTopicMutation.mutate(data)
  }

  return (
    <div className="p-8">

      {/* New Topic Button */}

      <button
        className="flex items-center gap-2 bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition"
      >
        <Plus size={16} />
        New Topic
      </button>

      {/* Form */}

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 space-y-6"
      >

        <div className="grid grid-cols-3 gap-6">

          <RHFField
            name="chapter"
            label="Chapter"
            type="select"
            control={form.control}
            options={chapterOptions}
          />

          <RHFField
            name="topicName"
            label="Topic Name"
            placeholder="Overview and basics of algebra"
            control={form.control}
          />

          <RHFField
            name="videoUrl"
            label="Video URL"
            placeholder="Enter URL"
            control={form.control}
          />

        </div>

        <RHFField
          name="description"
          label="Description"
          type="textarea"
          placeholder="Enter description..."
          control={form.control}
        />

        <div className="flex items-center gap-3">

          <AppButton
            type="submit"
            ctaText={
              createTopicMutation.isPending
                ? "Creating..."
                : "Create Topic"
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
          />

        </div>

      </form>

      {/* Topics List */}

      <div className="mt-8 space-y-3">

        {topics.map((topic) => (

          <div
            key={topic.id}
            className="flex items-center justify-between border rounded-xl px-4 py-3 bg-white"
          >

            <p className="text-[14px] font-medium">
              {topic.topicName}
            </p>

            <div className="flex items-center gap-4">

              <Pencil size={16} className="cursor-pointer" />

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