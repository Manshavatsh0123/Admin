"use client"

import { Controller, Control } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type FieldType = "text" | "email" | "number" | "textarea" | "select" | "password" | "date"

interface Option {
  label: string
  value: string
}

interface RHFFieldProps {
  name: string
  label: string
  control: Control<any>
  type?: FieldType
  placeholder?: string
  options?: Option[]
  required?: boolean
}

export function RHFField({
  name,
  label,
  control,
  type = "text",
  placeholder,
  options = [],
  required,
}: RHFFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="space-y-2 w-full">
          <Label>
            {label}
            {required && <span className="text-red-500">*</span>}
          </Label>

          {type === "textarea" ? (
            <Textarea
              {...field}
              placeholder={placeholder}
              className="w-full min-h-[80px]"
            />
          ) : type === "select" ? (
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
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
          ) : (
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className="w-full"
            />
          )}

          {fieldState.error && (
            <p className="text-sm text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  )
}