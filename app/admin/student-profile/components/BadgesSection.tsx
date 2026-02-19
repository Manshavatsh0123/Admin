"use client"

import { Ribbon } from "lucide-react"
import Image from "next/image"

interface Badge {
  name: string
  description: string
  image: string
  locked?: boolean
}

interface BadgesSectionProps {
  badges: Badge[]
}

export default function BadgesSection({ badges }: BadgesSectionProps) {
  return (
    <div className="rounded-2xl p-6 border card-padding">

      {/* Header */}
      <div className="flex items-center gap-1 mb-6">
        <Ribbon className="text-md" />
        <h3 className="text-[16px] font-semibold">Badges</h3>
      </div>

      {/* Badges Row */}
      <div className="flex justify-between flex-wrap gap-8">

        {badges.map((badge, i) => (
          <div key={i} className="flex flex-col items-center text-center w-[120px]">

            {/* Badge Image */}
            <div className="w-[35px] h-[35px] relative mb-3">
              <Image
                src={badge.image}
                alt={badge.name}
                fill
                className={`object-contain ${badge.locked ? "opacity-40" : ""}`}
              />
            </div>

            {/* Name */}
            <p className="text-[16px] font-semibold mb-1">
              {badge.name}
            </p>

            {/* Description */}
            <p className="text-[14px] text-gray-500 mb-3 leading-tight">
              {badge.description}
            </p>

            {/* Button */}
            <button className="bg-[#D33122] text-white text-xs px-4 py-1 rounded-md">
              Add
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}
