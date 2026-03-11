"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Plus, Pencil, Trash2 } from "lucide-react"

import {
  assessmentSchema,
  AssessmentFormValues
} from "@/components/schemas/assessment.schema"

import { RHFField } from "@/components/forms/RHFField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"
import apiClient from "@/lib/network"

type Assessment = {
  id: string
  title: string
  questions: number
  passingScore: number
  duration: string
}

export default function AssessmentPage() {

  const [assessments, setAssessments] = useState<Assessment[]>([])

  const form = useForm({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      title: "",
      course: "",
      options: 4,
      duration: "",
      passingScore: 70,
      description: "",
      instructions: ""
    }
  })

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

  const createAssessmentMutation = useMutation({

    mutationKey: ["createAssessment"],

    mutationFn: async (data: AssessmentFormValues) => {

      const token = localStorage.getItem("token")
      const courseId = localStorage.getItem("courseId")

      const payload = {
        title: data.title,
        numberOfQuestions: Number(data.options),
        passingScore: Number(data.passingScore),
        duration: data.duration,
        description: data.description,
        instructions: data.instructions
      }

      console.log("COURSE:", courseId)
      console.log("CHAPTER:", data.course)
      console.log("PAYLOAD:", payload)

      const response = await apiClient.post(
        `/courses/${courseId}/chapters/${data.course}/assessments`,
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

      const newAssessment: Assessment = {
        id: data.id,
        title: data.title,
        questions: data.numberOfQuestions,
        passingScore: data.passingScore,
        duration: data.duration
      }

      setAssessments(prev => [...prev, newAssessment])

      form.reset()
    },

    onError(error: any) {
      console.log("ASSESSMENT ERROR:", error?.response?.data)
    }

  })

  const onSubmit = (data: AssessmentFormValues) => {
    createAssessmentMutation.mutate(data)
  }

  return (
    <div className="px-8">

      {/* Header */}
      <button className="flex items-center gap-2 bg-[#D33122] text-white px-5 py-2 rounded-lg text-[14px] font-medium">
        <Plus size={16} />
        New Assessment
      </button>

      {/* Form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 space-y-6"
      >

        <div className="grid grid-cols-2 gap-6">

          <RHFField
            name="title"
            label="Assessment title"
            placeholder="e.g., Algebra Exam"
            control={form.control}
          />

          <RHFField
            name="course"
            label="Chapter"
            type="select"
            control={form.control}
            options={chapterOptions}
          />

          <RHFField
            name="options"
            label="Number of Questions"
            type="select"
            control={form.control}
            options={[
              { label: "10", value: "10" },
              { label: "50", value: "50" },
              { label: "100", value: "100" }
            ]}
          />

          <RHFField
            name="duration"
            label="Duration"
            placeholder="60 min"
            control={form.control}
          />

          <RHFField
            name="passingScore"
            label="Passing Score (%)"
            type="number"
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

        <RHFField
          name="instructions"
          label="Instructions"
          type="textarea"
          placeholder="Enter instructions..."
          control={form.control}
        />

        {/* Upload */}
        <FileUpload
          label="Upload Question Bank"
          variant="large"
          description="Upload Assessment Files"
          accept=".csv,.xls,.xlsx"
          preview
        />

        <div className="flex gap-3">

          <AppButton
            type="submit"
            ctaText={
              createAssessmentMutation.isPending
                ? "Creating..."
                : "Create Assessment"
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

      {/* Table */}
      <div className="mt-10 bg-white rounded-xl overflow-hidden border">

        <table className="w-full text-sm">

          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="p-3">Assessment Title</th>
              <th className="p-3">Questions</th>
              <th className="p-3">Passing Score</th>
              <th className="p-3">Duration</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {assessments.map(a => (
              <tr key={a.id} className="border-t">

                <td className="p-3">{a.title}</td>
                <td className="p-3">{a.questions}</td>
                <td className="p-3">{a.passingScore}%</td>
                <td className="p-3">{a.duration}</td>

                <td className="p-3 flex justify-end gap-3">
                  <Pencil size={16} className="cursor-pointer" />
                  <Trash2 size={16} className="text-red-500 cursor-pointer" />
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}