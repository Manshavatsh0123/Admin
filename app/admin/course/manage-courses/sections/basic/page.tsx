"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { courseSchema, CourseFormValues } from "@/components/schemas/course.schema"
import { RHFField } from "@/components/forms/RHFField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"
import apiClient from "@/lib/network"

export default function CourseBasicForm() {

  const form = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      grade: "",
      courseName: "",
      coursePrice: 0,
      discountedPrice: 0,
      status: "active",
      duration: "",
      description: "",
      subjectIcon: undefined,
    },
  })

  const createCourseMutation = useMutation({
    mutationKey: ["createCourse"],

    mutationFn: async (data: CourseFormValues) => {

      const token = localStorage.getItem("token")

      const payload = {
        grade: data.grade,
        name: data.courseName,
        duration: data.duration,
        image: "",
        sortDescription: data.description,
        about: data.description,
        overview: [],
        isActive: data.status === "active",
        price: data.coursePrice,
        discount: data.discountedPrice,
        expiryType: "LIFETIME",
        numberOfMonths: Math.ceil(Number(data.duration) / 4),
      }

      const response = await apiClient.post("/courses", payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response.data
    },

    onSuccess(data) {
      console.log("Course Created:", data)

      const courseId = data.course.id

      localStorage.setItem("courseId", courseId)

      form.reset()
    }
  })

  const onSubmit = (data: CourseFormValues) => {
    createCourseMutation.mutate(data)
  }

  return (
    <div className="px-10 w-full">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >

        <div className="grid grid-cols-3 gap-6">

          <RHFField
            name="grade"
            label="Grades"
            type="select"
            placeholder="Grade 5"
            control={form.control}
            options={[
              { label: "Grade 4", value: "4" },
              { label: "Grade 5", value: "5" },
              { label: "Grade 6", value: "6" },
              { label: "Grade 7", value: "7" },
            ]}
          />

          <RHFField
            name="courseName"
            label="Course Name"
            placeholder="e.g., Mathematics"
            control={form.control}
          />

          <RHFField
            name="coursePrice"
            label="Course Price"
            type="number"
            placeholder="50"
            control={form.control}
          />

          <RHFField
            name="discountedPrice"
            label="Discounted Price"
            type="number"
            placeholder="30"
            control={form.control}
          />

          <RHFField
            name="status"
            label="Status"
            type="select"
            control={form.control}
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />

          <RHFField
            name="duration"
            label="Duration"
            type="select"
            placeholder="5 Weeks"
            control={form.control}
            options={[
              { label: "2 Weeks", value: "2" },
              { label: "5 Weeks", value: "5" },
              { label: "8 Weeks", value: "8" },
            ]}
          />

        </div>

        <FileUpload
          label="Subject Icon"
          variant="small"
          description="Drag and drop image here"
          accept="image/png,image/jpeg,image/jpg"
          preview
        />

        <RHFField
          name="description"
          label="Short Description"
          type="textarea"
          placeholder="Enter short description..."
          control={form.control}
        />

        <div className="flex items-center gap-4">

          <AppButton
            type="submit"
            ctaText={
              createCourseMutation.isPending
                ? "Creating..."
                : "Update"
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
    </div>
  )
}