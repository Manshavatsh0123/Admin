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
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
}

export function DatePickerField({
  label,
  value,
  onChange,
  placeholder = "Pick a date",
}: DatePickerFieldProps) {

  const [date, setDate] = React.useState<Date | undefined>(value)

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    onChange?.(selectedDate)
  }

  return (
    <div className="space-y-2">

      <label className="text-sm font-medium">
        {label}
      </label>

      <Popover>

        <PopoverTrigger asChild>

          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >

            <CalendarIcon className="mr-2 h-4 w-4" />

            {date
              ? format(date, "dd-MM-yyyy")
              : placeholder}

          </Button>

        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">

          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
          />

        </PopoverContent>

      </Popover>

    </div>
  )
}
