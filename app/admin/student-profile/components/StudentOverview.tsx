"use client"

interface Stat {
  label: string
  value: string
}

interface StudentOverviewProps {
  name: string
  lastActive: string
  avatarLetter: string
  stats: Stat[]
}

export default function StudentOverview({
  name,
  lastActive,
  avatarLetter,
  stats,
}: StudentOverviewProps) {
  return (
    <div className="bg-white rounded-xl p-5 border">

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[24px] font-bold">{name}</h2>
          <p className="text-[16px] text-[#606060]">
            Last active: {lastActive}
          </p>
        </div>

        <div className="bg-[#D33122] text-white w-8 h-8 flex items-center justify-center rounded-full">
          {avatarLetter}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#CE371F]/10 p-4 rounded-lg">
            <p className="text-[14px] text-gray-500">{stat.label}</p>
            <p className="font-semibold text-[24px]">{stat.value}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
