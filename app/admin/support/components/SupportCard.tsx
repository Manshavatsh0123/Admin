"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2 } from "lucide-react"

interface SupportCardProps {
  title: string
  description: string
  status: string
  date: string
  onStatusChange?: (value: string) => void
  onSave?: () => void
  onDelete?: () => void
}

export function SupportCard({
  title,
  description,
  status,
  date,
  onStatusChange,
  onSave,
  onDelete,
}: SupportCardProps) {
  return (
    <div className="border rounded-2xl p-5 bg-white flex justify-between items-start">
      {/* Left Section */}
      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-gray-600 mt-1">
          {description}
        </p>

        <div className="mt-3 w-40">
          <Select
            value={status}
            onValueChange={onStatusChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="review">In Review</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end gap-3">
        <div className="flex gap-3">
          <button
            onClick={onSave}
            className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Save
          </button>

          <Trash2
            onClick={onDelete}
            className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-600"
          />
        </div>

        <span className="text-xs text-gray-500">
          {date}
        </span>
      </div>
    </div>
  )
}