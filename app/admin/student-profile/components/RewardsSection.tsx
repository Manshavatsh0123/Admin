"use client"

import { Gift } from "lucide-react"
import { ReactNode } from "react"

interface Reward {
  name: string
  points: string
  icon: ReactNode
  bgClass: string
  textColorClass: string
}

interface RewardsSectionProps {
  title?: string
  rewards: Reward[]
}

export default function RewardsSection({
  title = "Rewards",
  rewards,
}: RewardsSectionProps) {
  return (
    <div className="rounded-2xl p-6 border card-padding">

      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Gift className="text-md" />
        <h3 className="text-[20px] font-semibold">{title}</h3>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-4 gap-4">
        {rewards.map((reward, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 py-3 rounded-xl ${reward.bgClass}`}
          >
            {/* Left Section (Icon + Name) */}
            <div className="flex items-center gap-3">
              <div className="text-md">
                {reward.icon}
              </div>

              <p className="text-sm font-medium">
                {reward.name}
              </p>
            </div>

            {/* Points */}
            <p className={`font-semibold text-[16px] ${reward.textColorClass}`}>
              {reward.points}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}
