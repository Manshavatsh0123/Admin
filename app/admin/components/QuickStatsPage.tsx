"use client"

interface StatItem {
    label: string
    value: string
}

interface QuickStatsPageProps {
    stats: StatItem[]
}

export default function QuickStatsPage({
    stats,
}: QuickStatsPageProps) {
    return (
        <div className="cardIcon section-padding">

            <h2 className="quickStatsheading">
                Quick Stats
            </h2>

            <div>
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex items-center justify-between py-4 ${index !== stats.length - 1
                                ? "border-b border-[#E5E7EB]"
                                : ""
                            }`}
                    >
                        <span className="text-[#606060] text-[16px]">
                            {stat.label}
                        </span>

                        <span className="text-black text-[16px] font-medium">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}
