"use client"
import * as React from "react"
import AppButton from "@/components/global/Button"
import { FormField } from "@/app/admin/grade/subject/components/FormField"

const StudentForm = () => {
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    about: "",
    grade: "",
    status: "active",
  })

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full mt-6">

      <h2 className="text-[18px] font-semibold mb-6">
        Create New User
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <FormField
          label="Full Name"
          placeholder="e.g., Alex Singh"
          value={form.fullName}
          onChange={(value) => handleChange("fullName", value)}
        />

        <FormField
          label="User Email"
          placeholder="e.g., xyz@gmail.com"
          value={form.email}
          onChange={(value) => handleChange("email", value)}
        />

        <FormField
          label="Phone Number"
          placeholder="e.g., 1234567890"
          value={form.phone}
          onChange={(value) => handleChange("phone", value)}
        />

        <FormField
          label="About Me"
          placeholder="Enter something..."
          type="textarea"
          value={form.about}
          onChange={(value) => handleChange("about", value)}
        />

        <FormField
          label="Grade"
          placeholder="Grade 5"
          value={form.grade}
          onChange={(value) => handleChange("grade", value)}
        />

        <FormField
          label="Status"
          placeholder="Active"
          value={form.status}
          onChange={(value) => handleChange("status", value)}
        />

      </div>

      <div className="flex gap-3 mt-6">
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

    </div>
  )
}

export default StudentForm