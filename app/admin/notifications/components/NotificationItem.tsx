"use client"

import { Trash2 } from "lucide-react"

interface NotificationItem {
  id: string
  title: string
  message: string
  audience: string
  date: string
}

interface NotificationListProps {
  notifications: NotificationItem[]
  onDelete?: (id: string) => void
}

export default function NotificationList({
  notifications,
  onDelete,
}: NotificationListProps) {
  return (
    <div className="space-y-4 card-padding">

      {notifications.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-5 relative"
        >

          {/* Delete Icon */}
          <button
            onClick={() => onDelete?.(item.id)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition"
          >
            <Trash2 size={16} />
          </button>

          {/* Title */}
          <h3 className="text-[16px] font-semibold mb-1">
            {item.title}
          </h3>

          {/* Message */}
          <p className="text-[14px] text-gray-600 mb-3">
            {item.message}
          </p>

          {/* Bottom Row */}
          <div className="flex items-center justify-between">

            {/* Audience Badge */}
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
              {item.audience}
            </span>

            {/* Date */}
            <span className="text-sm text-gray-500">
              {item.date}
            </span>

          </div>

        </div>
      ))}

    </div>
  )
}
