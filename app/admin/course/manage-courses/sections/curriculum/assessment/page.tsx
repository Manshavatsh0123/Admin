"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Pencil, Trash2 } from "lucide-react"

import {
  assessmentSchema,
  AssessmentFormValues
} from "@/components/schemas/assessment.schema"

import { RHFField } from "@/components/forms/RHFField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"

type Assessment = {
  id: number
  title: string
  questions: number
  passingScore: number
  duration: string
}

export default function AssessmentPage() {

  const [assessments, setAssessments] = useState<Assessment[]>([
    { id: 1, title: "Algebra Exam", questions: 50, passingScore: 70, duration: "60 min" },
    { id: 2, title: "Linear Equations Exam", questions: 100, passingScore: 70, duration: "60 min" },
    { id: 3, title: "Trigonometry Exam", questions: 70, passingScore: 50, duration: "120 min" },
    { id: 4, title: "Calculus Exam", questions: 50, passingScore: 50, duration: "60 min" },
    { id: 5, title: "Integration Exam", questions: 150, passingScore: 60, duration: "60 min" }
  ])

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

  const onSubmit = (data: AssessmentFormValues) => {

    const newAssessment: Assessment = {
      id: Date.now(),
      title: data.title,
      questions: data.options,
      passingScore: data.passingScore,
      duration: data.duration
    }

    setAssessments(prev => [...prev, newAssessment])

    form.reset()
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
            label="Course"
            type="select"
            control={form.control}
            options={[
              { label: "Mathematics", value: "math" },
              { label: "Physics", value: "physics" }
            ]}
          />

          <RHFField
            name="options"
            label="Options"
            type="select"
            control={form.control}
            options={[
              { label: "4", value: "4" },
              { label: "5", value: "5" }
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
          // onChange={(file: File) =>
          //   form.setValue("questionBank", file)
          // }
        />

        <div className="flex gap-3">

          <AppButton
            type="submit"
            ctaText="Create Assessment"
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