"use client"

import PageInfoBar from '@/components/global/PageInfoBar'
import { StatCard } from '@/components/global/StatCard'
import { FilterSection } from '../grade/subject/components/FilterOption'
import NotificationForm from './components/NotificationForm'
import NotificationList from './components/NotificationItem'

const NotificationPage = () => {
    return (
        <>
            <PageInfoBar
                title="Notifications"
                description="Send announcements and updates to users"
                actionButtonLabel="Create Notification"
            />

            <NotificationForm />

            <div className="grid grid-cols-3 gap-4 card-padding">
                <StatCard label="Total Notifications" value={3} />
                <StatCard label="Total Sent" value="400" />
                <StatCard label="Test statics" value="70%" />
            </div>

            <FilterSection
                searchPlaceholder="Search users..."
                filters={[
                    {
                        label: "Status",
                        options: [
                            { label: "Active", value: "active" },
                            { label: "Inactive", value: "inactive" },
                        ],
                        value: "active",
                        onChange: (value) => console.log(value),
                    },
                ]}
                onSearch={(value) => console.log(value)}
                onReset={() => console.log("Reset")}
            />

            <NotificationList
                notifications={[
                    {
                        id: "1",
                        title: "Assignment Deadline",
                        message: "Complete your assignments before Friday",
                        audience: "Students",
                        date: "2026-01-13",
                    },
                    {
                        id: "2",
                        title: "New Course Available",
                        message: "Check out our latest GCSE Science course",
                        audience: "All Users",
                        date: "2026-01-13",
                    },
                    {
                        id: "3",
                        title: "Weekly Progress Report",
                        message: "Your child's weekly progress report is ready",
                        audience: "Parents",
                        date: "2026-01-13",
                    },
                ]}
                onDelete={(id) => console.log("Delete", id)}
            />

        </>
    )
}

export default NotificationPage