interface StatsCardProps {
  icon?: React.ReactNode
  title: string
  value: string | number
  percentage?: string
  description?: string
  badgeText?: string
}

export function Cards({
  icon,
  title,
  value,
  percentage,
}: StatsCardProps) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white section-padding">

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E1F8F2] mb-3.75 text-black">
        {icon}
      </div>

      {/* Title */}
      <p className="text-[16px] font-semibold text-black gap-8">
        {title}
      </p>

      {/* Value + Percentage */}
      <div className="flex items-center justify-between">
        <h2 className="text-[30px] font-bold text-black">
          {value}
        </h2>

        <span className="text-[14px] font-semibold text-[#008130]">
          {percentage}
        </span>
      </div>
    </div>
  )
}
