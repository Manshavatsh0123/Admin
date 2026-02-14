import { Card } from "@/components/ui/card"

interface StatCardProps {
  label: string
  value: string | number
  subtext?: string
  icon?: React.ReactNode
}

export function StatCard({
  label,
  value,
  subtext,
  icon,
}: StatCardProps) {
  return (
    <div className="border border-[#D9D9D9] rounded-[10px] p-[24px]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[16px] font-medium text-gray-600">{label}</p>
          <p className="mt-2 text-[30px] font-bold text-gray-900">{value}</p>
          {subtext && <p className="mt-1 text-xs text-gray-500">{subtext}</p>}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
    </div>
  )
}
