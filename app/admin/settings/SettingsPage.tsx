"use client"

import Link from "next/link"
import {  Bell, ChevronLeft, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import PageInfoBar from "@/components/global/PageInfoBar"

export default function SettingsPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <Link href="/admin">
            <ChevronLeft className="h-5 w-5 cursor-pointer" />
          </Link>
          <PageInfoBar title="Settings"
            description="Manage your profile, preferences, and account settings" />
        </div>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-[220px_1fr] gap-6">

        {/* LEFT MENU */}
        <div className="rounded-[16px] border py-[20px] py-[15px]">
          <CardContent className="p-3 space-y-2">

            <div className="flex items-center gap-2 bg-[#C1F1E4] rounded-lg px-3 py-2 text-sm font-medium">
              <Bell className="h-4 w-4" />
              Notifications
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer">
              <Lock className="h-4 w-4" />
              Privacy & Security
            </div>

          </CardContent>
        </div>

        {/* RIGHT CONTENT */}
        <div className="rounded-[16px] border">
          <CardContent className="p-6 space-y-6">

            <h2 className="text-lg font-semibold">
              Notifications
            </h2>

            {/* Notification Items */}
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
                  <p className="text-sm font-medium">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                <Checkbox />
              </div>
            ))}

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Button variant="outline">
                Cancel
              </Button>

              <Button className="bg-red-500 hover:bg-red-600">
                Save Changes
              </Button>
            </div>

          </CardContent>
        </div>

      </div>
    </div>
  )
}