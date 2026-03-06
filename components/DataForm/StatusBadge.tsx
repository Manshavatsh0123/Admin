"use client"

import { Badge } from "@/components/ui/badge"

export type StatusType =
  | "active"
  | "inactive"
  | "pending"
  | "success"
  | "error"
  | "warning"
  | "draft"
  | "published"
  | "scheduled"

interface StatusBadgeProps {
  status: StatusType
  label?: string
}

const statusStyles: Record<StatusType, string> = {
  active: "bg-green-100 text-green-700 hover:bg-green-100",
  published: "bg-green-100 text-green-700 hover:bg-green-100",
  
  pending: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  scheduled: "bg-blue-100 text-blue-700 hover:bg-blue-100",

  draft: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",

  inactive: "bg-gray-100 text-gray-700 hover:bg-gray-100",

  success: "bg-green-100 text-green-700 hover:bg-green-100",

  error: "bg-red-100 text-red-700 hover:bg-red-100",

  warning: "bg-orange-100 text-orange-700 hover:bg-orange-100",
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const displayLabel =
    label ??
    status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <Badge
      variant="secondary"
      className={`
        ${statusStyles[status]}
        rounded-full
        px-3 py-1
        text-xs font-medium
        border-0
        shadow-none
      `}
    >
      {displayLabel}
    </Badge>
  )
}
