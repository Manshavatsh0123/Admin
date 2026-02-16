"use client"


interface ActivityItem {
  title: string
  subtitle: string
  time: string
}

interface RecentActivityProps {
  activities: ActivityItem[]
}

export default function RecentActivity({
  activities,
}: RecentActivityProps) {
  return (
    <div className="cardIcon section-padding">

      <h2 className="quickStatsheading">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-[#E5E7EB] rounded-xl px-4 py-3 bg-white"
          >
            {/* Left */}
            <div>
              <p className="text-[16px] font-medium text-black">
                {item.title}
              </p>

              <p className="text-[14px] text-[#606060]">
                {item.subtitle}
              </p>
            </div>

            {/* Right */}
            <p className="text-[12px] text-[#606060] whitespace-nowrap">
              {item.time}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}
