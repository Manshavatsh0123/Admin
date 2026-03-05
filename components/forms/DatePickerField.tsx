"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerFieldProps {
  label: string
  value?: Date | null
  onChange?: (date: Date | null) => void
  placeholder?: string
}

export function DatePickerField({
  label,
  value,
  onChange,
  placeholder = "dd-mm-yyyy",
}: DatePickerFieldProps) {

  const [date, setDate] = React.useState<Date | null>(value ?? null)

  React.useEffect(() => {
    setDate(value ?? null)
  }, [value])

  const handleSelect = (selectedDate: Date | undefined) => {
    const newDate = selectedDate ?? null
    setDate(newDate)
    onChange?.(newDate)
  }

  return (
    <div className="space-y-2 w-full">

      <label className="text-[14px] font-medium text-black">
        {label}
      </label>

      <Popover>

        <PopoverTrigger asChild>

          <Button
            type="button"
            variant="outline"
            className={cn(
              "w-full h-[42px] px-2 flex items-center justify-between rounded-md bg-[#F6F6F6]",
              !date && "text-black"
            )}
          >

            <span>
              {date ? format(date, "dd-MM-yyyy") : placeholder}
            </span>

            <CalendarIcon className="h-5 w-5 text-black" />

          </Button>

        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">

          <Calendar
            mode="single"
            selected={date ?? undefined}
            onSelect={handleSelect}
            initialFocus
          />

        </PopoverContent>

      </Popover>

    </div>
  )
}