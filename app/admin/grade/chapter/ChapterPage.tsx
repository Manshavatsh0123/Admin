"use client"

import * as React from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { FilterSection } from "../subject/components/FilterOption"
import { DataTable } from "../subject/components/DataTable"
import { StatusBadge } from "../subject/components/StatusBadge"
import type { ColumnDef } from "../subject/components/DataTable"
import { Eye, Pencil, Trash2 } from "lucide-react"
import CreateChapterForm from "./components/CreateChapterForm"
import { StatCard } from "@/components/global/StatCard"

const mockData = [
    {
        id: 1,
        chapter: "Electricity",
        subject: "Science",
        duration: "1 hour",
        status: "active",
    },
    {
        id: 2,
        chapter: "Magnetics",
        subject: "Science",
        duration: "1 hour",
        status: "active",
    },
    {
        id: 3,
        chapter: "Natures",
        subject: "Science",
        duration: "2 hour",
        status: "active",
    },
    {
        id: 4,
        chapter: "Electronics",
        subject: "Science",
        duration: "3 hour",
        status: "active",
    },
    {
        id: 5,
        chapter: "Force",
        subject: "Science",
        duration: "2 hour",
        status: "draft",
    },
]


const ChapterPage = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const columns: ColumnDef[] = [
        {
            id: "chapter",
            header: "Chapters",
            accessorKey: "chapter",
        },
        {
            id: "subject",
            header: "Subjects",
            accessorKey: "subject",
        },
        {
            id: "duration",
            header: "Duration",
            accessorKey: "duration",
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
                        className="w-4 h-4 text-black cursor-pointer hover:text-gray-600"
                        onClick={(e) => {
                            e.stopPropagation()
                            console.log("Edit", row)
                        }}
                    />
                    <Trash2
                        className="w-4 h-4 text-gray-600 cursor-pointer hover:text-red-600"
                        onClick={(e) => {
                            e.stopPropagation()
                            console.log("Delete", row)
                        }}
                    />
                </div>
            ),
        },
        {
            id: "resources",
            header: "Resources",
            accessorKey: "id",
            cell: () => (
                <div className="flex items-center justify-between h-full">
                    <Eye className="w-4 h-4 text-black cursor-pointer" />
                </div>
            ),
        }
    ]

    return (
        <>
            <PageInfoBar
                title="Chapter Management"
                description="Create and manage chapters"
                actionButtonLabel="Create Chapter"
                onActionClick={() => setIsModalOpen(true)}
            />

            <CreateChapterForm />

            <div className="grid grid-cols-3 gap-4 card-padding">
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

export default ChapterPage



