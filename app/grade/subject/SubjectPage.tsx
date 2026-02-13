"use client"

import * as React from "react"
import { FormField } from "./components/FormField"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "./components/StatCard"
import { FilterSection } from "./components/FilterOption"
import { DataTable } from "./components/DataTable"
import { PaginationFooter } from "./components/PaginationFooter"
import { ChartSection } from "./components/ChartSection"
import { FormModal } from "./FormModal"
import { StatusBadge } from "./components/StatusBadge"
import { ActionButtons } from "./components/ActionButtons"
import type { ColumnDef } from "./components/DataTable"

const mockData = [
    {
        id: 1,
        title: "Getting Started with React",
        author: "John Doe",
        status: "published",
        views: "1,234",
        likes: "45",
        date: "2024-01-15",
    },
    {
        id: 2,
        title: "Next.js Best Practices",
        author: "Jane Smith",
        status: "draft",
        views: "856",
        likes: "32",
        date: "2024-01-14",
    },
    {
        id: 3,
        title: "TypeScript Tips",
        author: "Bob Johnson",
        status: "published",
        views: "2,145",
        likes: "89",
        date: "2024-01-13",
    },
]

const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 500 },
    { name: "May", value: 450 },
    { name: "Jun", value: 600 },
]

const SubjectPage = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [itemsPerPage, setItemsPerPage] = React.useState(10)


    const columns: ColumnDef[] = [
        { id: "title", header: "Title", accessorKey: "title" },
        { id: "author", header: "Author", accessorKey: "author" },
        {
            id: "status",
            header: "Status",
            accessorKey: "status",
            cell: (value: string) => (
                <StatusBadge
                    status={value === "published" ? "active" : "pending"}
                    label={value.charAt(0).toUpperCase() + value.slice(1)}
                />
            ),
        },
        { id: "views", header: "Views", accessorKey: "views" },
        { id: "likes", header: "Likes", accessorKey: "likes" },
        { id: "date", header: "Date", accessorKey: "date" },
        {
            id: "actions",
            header: "Actions",
            accessorKey: "id",
            cell: () => (
                <ActionButtons
                    onEdit={() => console.log("Edit")}
                    onDelete={() => console.log("Delete")}
                    onView={() => console.log("View")}
                />
            ),
        },
    ]


    return (
        <div className="space-y-6">
            <PageInfoBar
                title="Post Management"
                description="Manage and publish your blog posts"
                actionButtonLabel="New Post"
                onActionClick={() => setIsModalOpen(true)}
            />

            <div className="grid grid-cols-4 gap-4">
                <StatCard label="Total Posts" value={24} trend="up" trendValue="12%" />
                <StatCard label="Published" value={18} trend="up" trendValue="5%" />
                <StatCard label="Total Views" value="12.5K" trend="up" trendValue="23%" />
                <StatCard label="Total Likes" value="2.3K" trend="up" trendValue="8%" />
            </div>

            <FilterSection
                searchPlaceholder="Search posts..."
                filters={[
                    {
                        label: "Status",
                        options: [
                            { label: "All", value: "all" },
                            { label: "Published", value: "published" },
                            { label: "Draft", value: "draft" },
                        ],
                    },
                    {
                        label: "Author",
                        options: [
                            { label: "All", value: "all" },
                            { label: "John Doe", value: "john" },
                            { label: "Jane Smith", value: "jane" },
                        ],
                    },
                ]}
            />

            <DataTable columns={columns} data={mockData} />

            <PaginationFooter
                currentPage={currentPage}
                totalPages={5}
                itemsPerPage={itemsPerPage}
                totalItems={48}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />

            <ChartSection title="Post Views Trend" data={chartData} />

            <FormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Create New Post"
                description="Add a new blog post"
                onSubmit={() => {
                    setIsModalOpen(false)
                }}
            >
                <div className="space-y-4">
                    <FormField
                        label="Title"
                        placeholder="Post title"
                        required
                    />
                    <FormField
                        label="Content"
                        type="textarea"
                        placeholder="Write your content here..."
                        required
                    />
                    <FormField
                        label="Author"
                        placeholder="Author name"
                    />
                    <FormField
                        label="Status"
                        type="select"
                        options={[
                            { label: "Draft", value: "draft" },
                            { label: "Published", value: "published" },
                        ]}
                    />
                </div>
            </FormModal>
        </div>
    )
}

export default SubjectPage

