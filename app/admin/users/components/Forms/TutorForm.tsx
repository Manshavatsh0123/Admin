"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { tutorSchema, TutorFormValues } from "@/components/schemas/tutor.schema" 
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

interface CreateTutorFormProps {
  onCancel?: () => void
}

export default function CreateTutorForm({ onCancel }: CreateTutorFormProps) {

  const form = useForm<TutorFormValues>({
    resolver: zodResolver(tutorSchema),
    defaultValues: {
      status: "Active",
    },
  })

  const onSubmit = (data: TutorFormValues) => {
    console.log("Tutor Data:", data)
  }

  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full space-y-8">

      <h2 className="text-lg font-semibold">
        Create New Tutor
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <div className="border rounded-xl p-6 space-y-6">
          <h3 className="font-semibold">Personal Information</h3>

          <div className="grid grid-cols-3 gap-6">

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

            <RHFField
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              control={form.control}
            />

            <RHFField
              name="lastName"
              label="Last Name"
              placeholder="Enter last name"
              control={form.control}
            />

            <RHFField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              control={form.control}
            />

            <RHFField
              name="phone"
              label="Phone Number"
              placeholder="Enter phone number"
              control={form.control}
            />

            <RHFField
              name="joinDate"
              label="Join Date"
              type="date"
              control={form.control}
            />

          </div>
        </div>


        <div className="border rounded-xl p-6 space-y-6">
          <h3 className="font-semibold">Professional Information</h3>

          <div className="grid grid-cols-3 gap-6">

            <RHFField
              name="specialization"
              label="Specialization"
              type="select"
              control={form.control}
              options={[
                { label: "Mathematics", value: "Mathematics" },
                { label: "English", value: "English" },
                { label: "Science", value: "Science" },
              ]}
            />

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
              ]}
            />

            <RHFField
              name="experience"
              label="Experience (Years)"
              type="number"
              placeholder="Enter years of experience"
              control={form.control}
            />

            <RHFField
              name="qualifications"
              label="Qualifications"
              placeholder="Enter qualification"
              control={form.control}
            />

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

            <div className="col-span-3">
              <RHFField
                name="about"
                label="About"
                type="textarea"
                placeholder="Enter tutor description..."
                control={form.control}
              />
            </div>

          </div>
        </div>

      
        <div className="flex gap-3">

          {/* Submit */}
          <AppButton

            ctaText="Create Tutor"
            showIcon={false}
            className="bg-[#D33122] text-white px-5 py-2 rounded-lg"
          />

          {/*  Cancel */}
          <AppButton

            onClick={onCancel}
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
          />

        </div>

      </form>
    </div>
  )
}