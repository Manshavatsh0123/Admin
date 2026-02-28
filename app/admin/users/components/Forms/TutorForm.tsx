"use client"
import * as React from "react"
import AppButton from "@/components/global/Button"
import { FormField } from "@/app/admin/grade/subject/components/FormField"

const TutorForm = () => {

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    specialization: "",
    qualifications: "",
    about: "",
  })

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6 mt-6">

      {/* Personal Info */}
      <div className="bg-[#F6F6F6] rounded-2xl p-6 space-y-6">
        <h2 className="text-[18px] font-semibold">
          Create New Tutor
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <FormField
            label="First Name"
            placeholder="Enter first name"
            value={form.firstName}
            onChange={(v) => handleChange("firstName", v)}
          />

          <FormField
            label="Last Name"
            placeholder="Enter last name"
            value={form.lastName}
            onChange={(v) => handleChange("lastName", v)}
          />

          <FormField
            label="Email Address"
            placeholder="Enter email"
            value={form.email}
            onChange={(v) => handleChange("email", v)}
          />

          <FormField
            label="Phone Number"
            placeholder="Enter phone"
            value={form.phone}
            onChange={(v) => handleChange("phone", v)}
          />

          <FormField
            label="Experience (Years)"
            placeholder="Enter years"
            value={form.experience}
            onChange={(v) => handleChange("experience", v)}
          />
        </div>
      </div>

      {/* Professional Info */}
      <div className="bg-[#F6F6F6] rounded-2xl p-6 space-y-6">

        <h3 className="font-semibold">
          Professional Information
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <FormField
            label="Specialization"
            placeholder="Mathematics"
            value={form.specialization}
            onChange={(v) => handleChange("specialization", v)}
          />

          <FormField
            label="Qualifications"
            placeholder="Enter qualifications..."
            value={form.qualifications}
            onChange={(v) => handleChange("qualifications", v)}
          />

          <FormField
            label="About"
            placeholder="Write something..."
            type="textarea"
            value={form.about}
            onChange={(v) => handleChange("about", v)}
          />
        </div>

        <div className="flex gap-3 mt-4">
          <AppButton
            ctaText="Create Tutor"
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

    </div>
  )
}

export default TutorForm