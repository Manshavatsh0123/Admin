"use client"

import { Copy, Pencil, Trash2 } from "lucide-react"

interface CouponCardProps {
  code: string
  discount: string
  expires: string
  usage?: number
  limit?: number
  status: "active" | "inactive"
  onCopy: () => void
  onEdit: () => void
  onDelete: () => void
}

export default function CouponCard({
  code,
  discount,
  expires,
  status,
  onCopy,
  onEdit,
  onDelete,
}: CouponCardProps) {
  return (
    <div className="border rounded-2xl p-6 flex flex-col justify-between">

      {/* Top Section */}
      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-[24px] font-bold text-[#D33122]">
            {code}
          </h2>

          <p className="text-[14px] text-[#506B96] mt-[8px]">
            {discount}
          </p>
        </div>

        {/* Status Badge */}
        <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
          {status === "active" ? "Active" : "Inactive"}
        </span>

      </div>

      {/* Expiry */}
      <div className="flex justify-between items-center mt-[10px] text-[14px]">

        <span className="text-[#506B96]">
          Expires:
        </span>

        <span className="font-medium text-black">
          {expires}
        </span>

      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-[10px]">

        {/* Copy */}
        <button
          onClick={onCopy}
          className="flex items-center gap-2 text-[14px] hover:text-gray-700"
        >
          <Copy size={20} />
          Copy
        </button>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <button onClick={onEdit}>
            <Pencil size={20} className="text-black" />
          </button>

          <button onClick={onDelete}>
            <Trash2 size={20} className="text-[#D33122]" />
          </button>

        </div>

      </div>

    </div>
  )
}