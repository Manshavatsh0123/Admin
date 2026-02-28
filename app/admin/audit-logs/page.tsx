"use client"

import { useState, useMemo } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"
import { FilterSection } from "../grade/subject/components/FilterOption"
import { DataTable, ColumnDef } from "../grade/subject/components/DataTable"

const mockData = [
    {
        id: 1,
        timestamp: "2026-01-16 14:35:22",
        userType: "Student",
        action: "Login",
        details: "Rahul Singh logged in",
        ip: "192.168.1.100",
        status: "success",
    },
    {
        id: 2,
        timestamp: "2026-01-16 14:32:10",
        userType: "Parent",
        action: "View Report",
        details: "Priya Sharma viewed student progress report",
        ip: "192.168.1.101",
        status: "success",
    },
    {
        id: 3,
        timestamp: "2026-01-16 14:25:45",
        userType: "Tutor",
        action: "Submit Assignment",
        details: "Dr. Sharma submitted assignment for Mathematics",
        ip: "192.168.1.102",
        status: "success",
    },
    {
        id: 4,
        timestamp: "2026-01-16 14:15:33",
        userType: "Student",
        action: "Login",
        details: "Arjun Kumar failed login attempt",
        ip: "192.168.1.103",
        status: "failed",
    },
    {
        id: 5,
        timestamp: "2026-01-16 14:10:18",
        userType: "Parent",
        action: "Update Profile",
        details: "Sneha Patel updated profile information",
        ip: "192.168.1.104",
        status: "success",
    },
]

function page() {
    const [search, setSearch] = useState("")
    const [userType, setUserType] = useState("all")
    const [status, setStatus] = useState("all")

    const filteredData = useMemo(() => {
        return mockData.filter((item) => {
            const matchSearch = item.details
                .toLowerCase()
                .includes(search.toLowerCase())

            const matchUser =
                userType === "all" || item.userType === userType

            const matchStatus =
                status === "all" || item.status === status

            return matchSearch && matchUser && matchStatus
        })
    }, [search, userType, status])

    const columns: ColumnDef[] = [
        { id: "timestamp", header: "Timestamp", accessorKey: "timestamp" },
        {
            id: "userType",
            header: "User Type",
            accessorKey: "userType",
            cell: (value) => {
                const colorMap: Record<string, string> = {
                    Student: "bg-blue-100 text-blue-700",
                    Parent: "bg-purple-100 text-purple-700",
                    Tutor: "bg-green-100 text-green-700",
                }
                return (
                    <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${colorMap[value] || "bg-gray-100 text-gray-700"
                            }`}
                    >
                        {value}
                    </span>
                )
            },
        },
        { id: "action", header: "Action", accessorKey: "action" },
        {
            id: "details",
            header: "Details",
            accessorKey: "details",
            cell: (value) => <span className="text-gray-600">{value}</span>,
        },
        {
            id: "ip",
            header: "IP Address",
            accessorKey: "ip",
            cell: (value) => <span className="text-gray-500">{value}</span>,
        },
        {
            id: "status",
            header: "Status",
            accessorKey: "status",
            cell: (value) => (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${value === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                        }`}
                >
                    {value === "success" ? "Success" : "Failed"}
                </span>
            ),
        },
    ]

    const totalLogs = mockData.length
    const successCount = mockData.filter((i) => i.status === "success").length
    const failedCount = mockData.filter((i) => i.status === "failed").length

    return (
        <>
            <PageInfoBar
                title="Audit Logs"
                description="Monitor all platform activities and user sessions"
                actionButtonLabel="Export Logs"
            />

            <div className="grid grid-cols-3 gap-4 card-padding">
                <StatCard label="Total Logs" value={totalLogs} />
                <StatCard label="Successful Actions" value={successCount} />
                <StatCard label="Failed Actions" value={failedCount} />
            </div>

            {/* USING YOUR FILTERSECTION */}
            <FilterSection
                searchPlaceholder="Search by name"
                filters={[
                    {
                        label: "All User Types",
                        options: [
                            { label: "All User Types", value: "all" },
                            { label: "Student", value: "Student" },
                            { label: "Parent", value: "Parent" },
                            { label: "Tutor", value: "Tutor" },
                        ],
                        value: userType,
                        onChange: setUserType,
                    },
                ]}
                onSearch={setSearch}
            />

            <DataTable columns={columns} data={filteredData} />
        </>
    );
}

export default page;