"use client"

import { Card } from "@/components/ui/card"

export default function RecentActivity() {
    const activities = [
        {
            title: "New Student",
            subtitle: "Rahul Singh",
            time: "2 hours ago",
        },
        {
            title: "New Tutor",
            subtitle: "Dr. Priya Sharma",
            time: "4 hours ago",
        },
        {
            title: "Payment Received",
            subtitle: "₹5,000",
            time: "8 hours ago",
        },
    ]

    return (
        <Card className="p-6">
            <h2 className="text-[20px] font-semibold mb-5">Recent Activity</h2>

            <div className="space-y-3">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border rounded-lg p-4"
                    >
                        <div>
                            <p className="font-medium text-[16px]">{item.title}</p>
                            <p className="text-[14px] text-[#606060]">{item.subtitle}</p>
                        </div>

                        <p className="text-[12px] text-[#606060]">{item.time}</p>
                    </div>
                ))}
            </div>
        </Card>
    )
}
