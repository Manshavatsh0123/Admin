"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { studentSchema, StudentFormValues } from "@/components/schemas/student.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"
import { useMutation } from "@tanstack/react-query"
import apiClient from "@/lib/network"

export default function StudentForm() {

  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      grade: "Grade 5",
    },
  })

  const createStudentMutation = useMutation({
    mutationKey: ["createStudent"],

    mutationFn: async (data: StudentFormValues) => {

      const token = localStorage.getItem("token")

      const response = await apiClient.post(
        "/students",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      return response.data
    },

    onSuccess(data) {
      console.log("Student Created:", data)
      form.reset()
    },

    onError(error: any) {
      console.log("Create Student Error:", error.response?.data)
    }
  })

  const onSubmit = (data: StudentFormValues) => {
    createStudentMutation.mutate(data)
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full space-y-6 card-padding">

      <h2 className="text-lg font-semibold">
        Create New Student
      </h2>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6"
      >

        {/* Student Name */}
        <RHFField
          name="name"
          label="Student Name"
          placeholder="e.g., Alex Singh"
          control={form.control}
        />

        {/* Email */}
        <RHFField
          name="email"
          label="User Email"
          type="email"
          placeholder="e.g., xyz@gmail.com"
          control={form.control}
        />

        {/* Password */}
        <RHFField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          control={form.control}
        />

        {/* Phone */}
        <RHFField
          name="phone"
          label="Phone Number"
          placeholder="e.g., 1234567890"
          control={form.control}
        />

        {/* Grade */}
        <RHFField
          name="grade"
          label="Grade"
          type="select"
          control={form.control}
          options={[
            { label: "Grade 1", value: "Grade 1" },
            { label: "Grade 2", value: "Grade 2" },
            { label: "Grade 3", value: "Grade 3" },
            { label: "Grade 4", value: "Grade 4" },
            { label: "Grade 5", value: "Grade 5" },
            { label: "Grade 6", value: "Grade 6" },
          ]}
        />

        {/* Profile Picture */}
        <RHFField
          name="profilePicture"
          label="Profile Picture URL"
          placeholder="Enter image URL"
          control={form.control}
        />

        {/* About */}
        <RHFField
          name="about"
          label="About"
          type="textarea"
          placeholder="Enter something..."
          control={form.control}
        />

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 mt-4">

          <AppButton
            ctaText={createStudentMutation.isPending ? "Adding Student..." : "Add Student"}
            showIcon={false}
            className="bg-[#D33122] text-white px-5 py-2 rounded-lg"
          />

          <AppButton
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
          />

        </div>

      </form>
    </div>
  )
}