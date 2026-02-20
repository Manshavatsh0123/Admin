"use client"

import { useState } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"
import { DataTable, ColumnDef } from "../grade/subject/components/DataTable"
import { Pencil } from "lucide-react"
import { FilterSection } from "../grade/subject/components/FilterOption"
import { SupportCard } from "./components/SupportCard"

const initialNotifications = [
  {
    id: 1,
    title: "Assignment Deadline",
    description: "Complete your assignments before Friday",
    status: "review",
    date: "2026-01-13",
  },
  {
    id: 2,
    title: "New Course Available",
    description: "Check out our latest GCSE Science course",
    status: "resolved",
    date: "2026-01-13",
  },
  {
    id: 3,
    title: "Weekly Progress Report",
    description: "Your child's weekly progress report is ready",
    status: "pending",
    date: "2026-01-13",
  },
]

const tickets = [
  { handler: "Student1", ticketId: "12345678", assignee: "Tutor1", status: "open" },
  { handler: "Student2", ticketId: "12345678", assignee: "Tutor2", status: "in-progress" },
  { handler: "Parent", ticketId: "12345678", assignee: "Tutor3", status: "resolved" },
]

export const SupportManagementPage = () => {
  const [search, setSearch] = useState("")
  const [notifications, setNotifications] = useState(initialNotifications)

  const handleStatusChange = (id: number, newStatus: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    )
  }

  const handleDelete = (id: number) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  const filteredNotifications = notifications.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const ticketColumns: ColumnDef[] = [
    { id: "handler", header: "Handler", accessorKey: "handler" },
    { id: "ticketId", header: "Ticket ID", accessorKey: "ticketId" },
    { id: "assignee", header: "Assignee", accessorKey: "assignee" },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value) => {
        const colorMap: Record<string, string> = {
          open: "bg-red-100 text-red-600",
          "in-progress": "bg-blue-100 text-blue-600",
          resolved: "bg-purple-100 text-purple-600",
        }

        const labelMap: Record<string, string> = {
          open: "Open",
          "in-progress": "In progress",
          resolved: "Resolved",
        }

        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${colorMap[value] || "bg-gray-100 text-gray-600"
              }`}
          >
            {labelMap[value]}
          </span>
        )
      },
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "ticketId",
      cell: () => (
        <Pencil className="w-4 h-4 cursor-pointer hover:text-gray-600" />
      ),
    },
  ]

  return (
    <>
      <PageInfoBar
        title="Support Management"
        description="Send announcements and updates to users"
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 card-padding">
        <StatCard label="Total Support" value={notifications.length} />
        <StatCard
          label="Resolved"
          value={notifications.filter((n) => n.status === "resolved").length}
        />
        <StatCard
          label="Pending"
          value={`${Math.round(
            (notifications.filter((n) => n.status === "pending").length /
              notifications.length) *
            100
          )}%`}
        />
      </div>

      {/* Search */}
      <FilterSection
        searchPlaceholder="Search by notification..."
        onSearch={setSearch}
      />

      {/* Notification Cards */}
      <div className="space-y-4 card-padding">
        {filteredNotifications.map((item) => (
          <SupportCard
            key={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            date={item.date}
            onStatusChange={(value) =>
              handleStatusChange(item.id, value)
            }
            onSave={() => console.log("Saved:", item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>


      <DataTable columns={ticketColumns} data={tickets} />
    </>
  )
}