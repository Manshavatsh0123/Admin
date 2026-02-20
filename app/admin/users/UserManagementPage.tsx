"use client"

import { useState } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"
import { DataTable, ColumnDef } from "../grade/subject/components/DataTable"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Trash2 } from "lucide-react"
import { FilterSection } from "../grade/subject/components/FilterOption"
import UserManagementForm from "./components/UserManagementForm"

const mockUsers = [
  {
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    relationship: "Father",
    children: 2,
    phone: "1234567890",
    status: "active",
  },
  {
    name: "Neetu Sen",
    email: "neetu.sen@example.com",
    relationship: "Mother",
    children: 1,
    phone: "1234567890",
    status: "active",
  },
  {
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    relationship: "Father",
    children: 3,
    phone: "1234567890",
    status: "active",
  },
  {
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    relationship: "Father",
    children: 4,
    phone: "1234567890",
    status: "active",
  },
  {
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    relationship: "Father",
    children: 2,
    phone: "1234567890",
    status: "inactive",
  },
]

export const UserManagementPage = () => {
  const [search, setSearch] = useState("")

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  const columns: ColumnDef[] = [
    {
      id: "name",
      header: "Name",
      accessorKey: "name",
    },
    {
      id: "email",
      header: "Email",
      accessorKey: "email",
      cell: (value) => (
        <span className="text-gray-500 text-sm">
          {value}
        </span>
      ),
    },
    {
      id: "relationship",
      header: "Relationship",
      accessorKey: "relationship",
    },
    {
      id: "children",
      header: "Enrolled Childs",
      accessorKey: "children",
    },
    {
      id: "phone",
      header: "Phone Number",
      accessorKey: "phone",
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${value === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
            }`}
        >
          {value === "active" ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "email",
      cell: () => (
        <div className="flex gap-4">
          <Pencil className="w-4 h-4 cursor-pointer hover:text-gray-600" />
          <Trash2 className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-600" />
        </div>
      ),
    },
  ]

  return (
    <>
      <PageInfoBar
        title="User Management"
        description="Manage users - students and parents"
        actionButtonLabel="Add Parent"
      />

     <UserManagementForm />
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 card-padding">
        <StatCard label="Total Users" value={5} />
        <StatCard label="Students" value={5} />
        <StatCard label="Parents" value={5} />
      </div>

      
      <FilterSection
        searchPlaceholder="Search by name"
        onSearch={setSearch}
        filters={[
          {
            label: "All Roles",
            options: [
              { label: "All Roles", value: "all" },
              { label: "Parent", value: "parent" },
              { label: "Student", value: "student" },
            ],
          },
          {
            label: "All Status",
            options: [
              { label: "All Status", value: "all" },
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ],
          },
        ]}
      />

      {/* Table */}
      <div className="mt-6">
        <DataTable columns={columns} data={filteredUsers} />
      </div>
    </>
  )
}