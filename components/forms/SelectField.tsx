"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Option {
  label: string
  value: string
}

interface SelectFieldProps {
  label: string
  placeholder?: string
  options: Option[]
}

export default function SelectField({
  label,
  placeholder,
  options,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-[14px] font-medium">
        {label}
      </Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
