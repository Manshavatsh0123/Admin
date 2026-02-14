"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface TextAreaFieldProps {
  label: string
  placeholder?: string
  className?: string
}

export default function TextAreaField({
  label,
  placeholder,
  className = "",
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-[14px] font-medium">
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        className={`min-h-[120px] ${className}`}
      />
    </div>
  )
}
