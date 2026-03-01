"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { studentSchema, StudentFormValues } from "@/components/schemas/student.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

export default function StudentForm() {

  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      userType: "Student",
      status: "Active",
      grade: "Grade 5",
    },
  })

  const onSubmit = (data: StudentFormValues) => {
    console.log("Student Data:", data)
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full space-y-6 card-padding">

      <h2 className="text-lg font-semibold">
        Create New User
      </h2>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6"
      >

        {/* User Type */}
        <RHFField
          name="userType"
          label="User Type"
          type="select"
          control={form.control}
          options={[
            { label: "Student", value: "Student" },
          ]}
        />

        {/* Full Name */}
        <RHFField
          name="fullName"
          label="Full Name"
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

        {/* Phone */}
        <RHFField
          name="phone"
          label="Phone Number"
          placeholder="e.g., 1234567890"
          control={form.control}
        />

        {/* About */}
        <RHFField
          name="about"
          label="About Me"
          type="textarea"
          placeholder="Enter something..."
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

        {/* Status */}
        <RHFField
          name="status"
          label="Status"
          type="select"
          control={form.control}
          options={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
          ]}
        />

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 mt-4">
          <AppButton
            ctaText="Add User"
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