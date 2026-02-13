import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RecentActivity from "./RecentActivity"

export default function QuickStatsPage() {
    const stats = [
        { label: "Total Courses", value: "156" },
        { label: "Total Tests", value: "2,847" },
        { label: "Avg Session Duration", value: "58 min" },
    ]

    return (
        <div className="card-padding grid lg:grid-cols-[3fr_1.5fr] gap-4">

            {/* Quick Stats */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-[20px] font-semibold">
                        Quick Stats
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-0">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`flex items-center justify-between py-4 ${index !== stats.length - 1 ? "border-b border-border" : "" }`}>
                            <span className="text-[#606060] text-[16px]">{stat.label}</span>
                            <span className="text-black font-medium text-[16px]">{stat.value}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>

            
            
                <RecentActivity />
            
        </div>
    )
}
