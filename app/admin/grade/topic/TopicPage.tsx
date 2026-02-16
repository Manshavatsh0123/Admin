"use client"

import * as React from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { FilterSection } from "../subject/components/FilterOption"
import { DataTable } from "../subject/components/DataTable"
import { StatusBadge } from "../subject/components/StatusBadge"
import type { ColumnDef } from "../subject/components/DataTable"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { StatCard } from "@/components/global/StatCard"
import CreateTopic from "./components/CreateTopic"

const mockData = [
    {
        id: 1,
        topicName: "Introduction to Algebra",
        chapter: "Algebra",
        tutors: 12,
        students: 285,
        status: "active",
    },
    {
        id: 2,
        topicName: "Trigonometry Basics",
        chapter: "Trigonometry",
        tutors: 8,
        students: 245,
        status: "active",
    },
]

const TopicPage = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const columns: ColumnDef[] = [
        {
            id: "topicName",
            header: "Topic Name",
            accessorKey: "topicName",
        },
        {
            id: "chapter",
            header: "Chapter",
            accessorKey: "chapter",
        },
        {
            id: "tutors",
            header: "Tutors",
            accessorKey: "tutors",
        },
        {
            id: "students",
            header: "Students",
            accessorKey: "students",
        },
        {
            id: "status",
            header: "Status",
            accessorKey: "status",
            cell: (value: string) => (
                <StatusBadge
                    status={value === "active" ? "active" : "pending"}
                    label={value === "active" ? "Active" : "Draft"}
                />
            ),
        },
        {
            id: "actions",
            header: "Actions",
            accessorKey: "id",
            cell: (_: any, row?: any) => (
                <div className="flex items-center gap-4">
                    <Pencil
                        size={16}
                        strokeWidth={1.5}
                        className="cursor-pointer hover:text-gray-600"
                        onClick={(e) => {
                            e.stopPropagation()
                            console.log("Edit", row)
                        }}
                    />

                    <Trash2
                        size={16}
                        strokeWidth={1.5}
                        className="cursor-pointer hover:text-red-600"
                        onClick={(e) => {
                            e.stopPropagation()
                            console.log("Delete", row)
                        }}
                    />
                </div>
            ),
        },
    ]

    return (
        <>
            <PageInfoBar
                title="Topic  Management"
                description="Create and manage chapter’s topics and video tutorial links"
                actionButtonLabel="Create Topic"
                onActionClick={() => setIsModalOpen(true)}
            />

            <CreateTopic />

            <div className="grid grid-cols-3 gap-7.5 card-padding">
                <StatCard label="Total Courses" value={5} />
                <StatCard label="Active Courses" value="7" />
                <StatCard label="Total Students" value="555" />
            </div>

            <FilterSection
                searchPlaceholder="Search"
                filters={[
                    {
                        label: "All Levels",
                        options: [
                            { label: "All", value: "all" },
                            { label: "GCSE", value: "GCSE" },
                            { label: "Secondary", value: "Secondary" },
                            { label: "Primary", value: "Primary" },
                        ],
                    }
                ]}
            />

            <DataTable columns={columns} data={mockData} />
        </>
    )
}

export default TopicPage