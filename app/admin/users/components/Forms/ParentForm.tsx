"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { parentSchema, ParentFormValues } from "@/components/schemas/parent.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

export default function ParentForm() {

  const form = useForm<ParentFormValues>({
    resolver: zodResolver(parentSchema),
    defaultValues: {
      userType: "Parent",
      status: "Active",
    },
  })

  const onSubmit = (data: ParentFormValues) => {
    console.log("Parent Data:", data)
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full space-y-6 card-padding">

      <h2 className="text-lg font-semibold">
        Create New Parent
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
            { label: "Parent", value: "Parent" },
          ]}
        />

        {/* Pronoun */}
        <RHFField
          name="pronoun"
          label="Pronoun"
          type="select"
          control={form.control}
          options={[
            { label: "Mr.", value: "Mr." },
            { label: "Mrs.", value: "Mrs." },
            { label: "Ms.", value: "Ms." },
          ]}
        />

        {/* Full Name */}
        <RHFField
          name="fullName"
          label="Full Name"
          placeholder="Enter full name"
          control={form.control}
        />

        {/* Relationship */}
        <RHFField
          name="relationship"
          label="Relationship"
          type="select"
          control={form.control}
          options={[
            { label: "Father", value: "Father" },
            { label: "Mother", value: "Mother" },
            { label: "Guardian", value: "Guardian" },
          ]}
        />

        {/* Enrolled Child */}
        <RHFField
          name="enrolledChildren"
          label="Enrolled Child"
          type="select"
          control={form.control}
          options={[
            { label: "Student 1", value: "student1" },
            { label: "Student 2", value: "student2" },
          ]}
        />

        {/* Email */}
        <RHFField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter email"
          control={form.control}
        />

        <RHFField
          name="about"
          label="About"
          type="textarea"
          placeholder="Enter something..."
          control={form.control}
        />

        {/* Phone */}
        <RHFField
          name="phone"
          label="Phone Number"
          placeholder="Enter phone number"
          control={form.control}
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

