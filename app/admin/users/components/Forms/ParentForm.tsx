"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { parentSchema, ParentFormValues } from "@/components/schemas/parent.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"
import { useMutation } from "@tanstack/react-query"
import apiClient from "@/lib/network"

export default function ParentForm() {

  const form = useForm<ParentFormValues>({
    resolver: zodResolver(parentSchema),
  })

  const createParentMutation = useMutation({
    mutationKey: ["createParent"],

    mutationFn: async (data: ParentFormValues) => {

      const token = localStorage.getItem("token")

      const response = await apiClient.post(
        "/parents",
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
      console.log("Parent Created:", data)
      form.reset()
    },

    onError(error: any) {
      console.log("Create Parent Error:", error.response?.data)
    }
  })

  const onSubmit = (data: ParentFormValues) => {
    createParentMutation.mutate(data)
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

        {/* Name */}
        <RHFField
          name="name"
          label="Full Name"
          placeholder="Enter full name"
          control={form.control}
        />

        {/* Email */}
        <RHFField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter email"
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

        {/* Phone */}
        <RHFField
          name="phone"
          label="Phone Number"
          placeholder="Enter phone number"
          control={form.control}
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
            ctaText={createParentMutation.isPending ? "Adding Parent..." : "Add Parent"}
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