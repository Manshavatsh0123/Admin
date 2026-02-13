import { Badge } from "@/components/ui/badge"

type StatusType = "active" | "inactive" | "pending" | "success" | "error" | "warning"

interface StatusBadgeProps {
  status: StatusType
  label: string
}

const statusStyles: Record<StatusType, string> = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-orange-100 text-orange-800",
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <Badge className={statusStyles[status]}>
      {label}
    </Badge>
  )
}
