"use client"

import * as React from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { StatCard } from "@/components/global/StatCard"
import { StatusBadge } from "../grade/subject/components/StatusBadge"
import { FilterSection } from "../grade/subject/components/FilterOption"
import { ColumnDef, DataTable } from "../grade/subject/components/DataTable"
import PostForm from "./components/PostForm"

const mockData = [
    {
        id: 1,
        title: "Tips for GCSE Mathematics Success",
        labels: "11 Plus, GCSE",
        category: "Study Tips",
        date: "2026-01-15",
        status: "published",
    },
    {
        id: 2,
        title: "Understanding English Literature Essays",
        labels: "11 Plus, GCSE",
        category: "Learning Guide",
        date: "2026-01-12",
        status: "published",
    },
    {
        id: 3,
        title: "Parent's Guide to Online Learning",
        labels: "11 Plus, GCSE",
        category: "Parent Tips",
        date: "2026-01-10",
        status: "published",
    },
    {
        id: 4,
        title: "Top reasoning tips to become expert",
        labels: "11 Plus, GCSE",
        category: "Educational",
        date: "2026-01-20",
        status: "scheduled",
    },
    {
        id: 5,
        title: "New Features Released This Month",
        labels: "11 Plus, GCSE",
        category: "News",
        date: "2026-01-16",
        status: "draft",
    },
]

function page() {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const columns: ColumnDef[] = [
        {
            id: "title",
            header: "Title",
            accessorKey: "title",
        },
        {
            id: "labels",
            header: "Labels",
            accessorKey: "labels",
        },
        {
            id: "category",
            header: "Category",
            accessorKey: "category",
        },
        {
            id: "date",
            header: "Date",
            accessorKey: "date",
        },
        {
            id: "status",
            header: "Status",
            accessorKey: "status",
            cell: (value: string) => {
                let statusType: "active" | "pending" | "draft" = "draft"
                let label = "Draft"

                if (value === "published") {
                    statusType = "active"
                    label = "Published"
                }

                if (value === "scheduled") {
                    statusType = "pending"
                    label = "Scheduled"
                }

                if (value === "draft") {
                    statusType = "draft"
                    label = "Draft"
                }

                return (
                    <StatusBadge
                        status={statusType}
                        label={label}
                    />
                )
            },
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
                title="Post Management"
                description="Create, edit, and manage blog posts and news & updates for your learners"
                actionButtonLabel="Create Post"
                onActionClick={() => setIsModalOpen(true)}
            />

            <PostForm />

            <div className="grid grid-cols-4 gap-7.5 card-padding">
                <StatCard label="Total Posts" value={5} />
                <StatCard label="Published" value="4" />
                <StatCard label="Total Views" value="500" />
                <StatCard label="Average Views/Post" value="540" />
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
    );
}

export default page;