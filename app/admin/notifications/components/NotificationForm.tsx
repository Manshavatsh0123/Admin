"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { notificationSchema, NotificationFormValues } from "@/components/schemas/notification.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"
import { useMutation } from "@tanstack/react-query"
import apiClient from "@/lib/network"

interface NotificationFormProps {
  onCancel?: () => void
}

export default function NotificationForm({ onCancel }: NotificationFormProps) {

  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      sendTo: "all",
      channel: "both",
    },
  })

  const createNotificationMutation = useMutation({
    mutationKey: ["createNotification"],

    mutationFn: async (data: NotificationFormValues) => {

      const token = localStorage.getItem("token")

      const payload = {
        title: data.title,
        message: data.message,
        receiver: data.sendTo
      }

      const response = await apiClient.post(
        "/notifications",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      return response.data
    },

    onSuccess(data) {
      console.log("Notification Sent:", data)
      form.reset()
    },

    onError(error: any) {
      console.log("Notification Error:", error.response?.data)
    }
  })

  const onSubmit = (data: NotificationFormValues) => {
    createNotificationMutation.mutate(data)
  }

  return (
    <div className="bg-[#F6F6F6] rounded-3xl p-8 w-full mt-6.5">

      <h2 className="text-[18px] font-semibold mb-6">
        Create Notification
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* Title */}
        <RHFField
          name="title"
          label="Title"
          placeholder="Notification Title"
          control={form.control}
        />

        {/* Message */}
        <RHFField
          name="message"
          label="Message"
          type="textarea"
          placeholder="Write your message here..."
          control={form.control}
        />

        <div className="grid grid-cols-2 gap-5">

          <RHFField
            name="sendTo"
            label="Send To"
            type="select"
            control={form.control}
            options={[
              { label: "All Users", value: "all" },
              { label: "Students", value: "students" },
              { label: "Tutors", value: "tutors" },
              { label: "Parents", value: "parents" },
            ]}
          />

          <RHFField
            name="channel"
            label="Channel"
            type="select"
            control={form.control}
            options={[
              { label: "Email Only", value: "email" },
              { label: "Dashboard Only", value: "dashboard" },
              { label: "Both Email and Dashboard", value: "both" },
            ]}
          />

        </div>

        <div className="flex items-center gap-4">

          <AppButton
            type="submit"
            ctaText={
              createNotificationMutation.isPending
                ? "Sending..."
                : "Send Notification"
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