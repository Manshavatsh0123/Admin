"use client"

import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppButton from "@/components/global/Button"

export default function Page() {
  return (
    <div className="space-y-[20px]">

      <h2 className="text-[24px] font-semibold">
        Privacy & Security
      </h2>

      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Lock className="h-[24px] w-[24px]" />
          <div>
            <p className="text-[20px] font-medium">Security</p>
          </div>
        </div>

        <AppButton ctaText="Change Password" variant="outline" className="text-[#D33122] border-[#D33122] hover:bg-red-50"></AppButton>
      </div>

    </div>
  )
}