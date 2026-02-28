"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import AppButton from "@/components/global/Button"

export default function Page() {
  return (
    <div className="space-y-[20px]">

      <h2 className="text-[24px] font-semibold">
        Notifications
      </h2>

      {[
        {
          title: "Email Notifications",
          desc: "Receive email updates about curriculum activities",
        },
        {
          title: "Assignment Alerts",
          desc: "Get notified when new assignments are due or submitted",
        },
        {
          title: "Student Messages",
          desc: "Receive notifications for tutor messages",
        },
        {
          title: "Weekly Report",
          desc: "Get a summary of your performance activities each week",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start justify-between border rounded-lg p-4"
        >
          <div>
            <p className="text-[14px] font-medium">
              {item.title}
            </p>
            <p className="text-[14px] text-[#606060]">
              {item.desc}
            </p>
          </div>

          <Checkbox />
        </div>
      ))}

      <div className="flex items-center gap-3 pt-2">
        <AppButton ctaText="Cancel" variant="outline" />
        <AppButton ctaText="Save Changes" />
      </div>

    </div>
  )
}