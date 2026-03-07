"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil, Trash2, Plus } from "lucide-react"

import {
  assignmentSchema,
  AssignmentFormValues
} from "@/components/schemas/assignment.schema"

import { RHFField } from "@/components/forms/RHFField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"

type Assignment = {
  id: number
  title: string
  questions: number
  passingScore: number
  duration: string
}

export default function AssignmentPage() {

  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, title: "Algebra Exam", questions: 10, passingScore: 30, duration: "30 min" },
    { id: 2, title: "Linear Equations Exam", questions: 5, passingScore: 20, duration: "20 min" },
    { id: 3, title: "Trigonometry Exam", questions: 10, passingScore: 30, duration: "30 min" },
    { id: 4, title: "Calculus Exam", questions: 5, passingScore: 20, duration: "30 min" },
    { id: 5, title: "Integration Exam", questions: 10, passingScore: 30, duration: "30 min" }
  ])

  const form = useForm({
    resolver: zodResolver(assignmentSchema),
    defaultValues: {
      title: "",
      course: "",
      options: 4,
      duration: "",
      passingScore: 30,
      description: "",
      instructions: ""
    }
  })

  const onSubmit = (data: AssignmentFormValues) => {

    const newAssignment: Assignment = {
      id: Date.now(),
      title: data.title,
      questions: data.options,
      passingScore: data.passingScore,
      duration: data.duration
    }

    setAssignments(prev => [...prev, newAssignment])

    form.reset()
  }

  return (
    <div className="px-8">

      {/* Header */}
      <button className="flex items-center gap-2 bg-[#D33122] text-white px-5 py-2 rounded-lg text-[14px] font-medium">
        <Plus size={16} />
        New Assignment
      </button>

      {/* Form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 space-y-6"
      >

        <div className="grid grid-cols-2 gap-6">

          <RHFField
            name="title"
            label="Assignment Title"
            placeholder="e.g., Algebra Quiz"
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
            placeholder="30 min"
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
          description="Upload Assignment Files"
          accept=".csv,.xls,.xlsx"
          preview
        // onChange={(file: File) =>
        //   form.setValue("questionBank", file)
        // }
        />

        <div className="flex gap-3">

          <AppButton
            type="submit"
            ctaText="Create Assignment"
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
              <th className="p-3">Assignment Title</th>
              <th className="p-3">Questions</th>
              <th className="p-3">Passing Score</th>
              <th className="p-3">Duration</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map(a => (
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