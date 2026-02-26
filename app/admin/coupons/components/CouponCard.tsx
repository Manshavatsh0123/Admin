"use client"

import { Copy, Pencil, Trash2 } from "lucide-react"

export type CouponStatus = "active" | "inactive"

interface CouponCardProps {
  code: string
  discount: string
  expires: string
  usage: number
  limit: number
  status: CouponStatus
  onCopy?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export function CouponCard({
  code,
  discount,
  expires,
  usage,
  limit,
  status,
  onCopy,
  onEdit,
  onDelete,
}: CouponCardProps) {
  const percentage = limit > 0 ? (usage / limit) * 100 : 0

  return (
    <div className="border rounded-[16px] p-[25px] bg-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[#D33122] text-[24px] font-semibold">
          {code}
        </h3>

        <span
          className={`px-3 py-1 text-[12px] rounded-full ${
            status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status === "active" ? "Active" : "Inactive"}
        </span>
      </div>

      <p className="text-[14px] text-[#4D6A98] mb-4 border-b pb-4">
        {discount}
      </p>

      {/* Expiry */}
      <div className="flex justify-between text-[14px] mb-2">
        <span className="text-[#4D6A98]">Expires:</span>
        <span className="font-semibold">{expires}</span>
      </div>

      {/* Usage */}
      <div className="flex justify-between text-[14px] mb-2">
        <span className="text-[#4D6A98]">Usage:</span>
        <span className="font-semibold">
          {usage} / {limit}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
        <div
          className="bg-[#D33122] h-2 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center text-[14px] border-t pt-4">

        <button
          onClick={onCopy}
          className="flex items-center gap-2 text-black hover:text-gray-600"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>

        <div className="flex gap-4">
          <Pencil
            onClick={onEdit}
            className="w-4 h-4 cursor-pointer hover:text-gray-600"
          />
          <Trash2
            onClick={onDelete}
            className="w-4 h-4 text-[#D33122] cursor-pointer hover:text-red-600"
          />
        </div>

      </div>
    </div>
  )
}