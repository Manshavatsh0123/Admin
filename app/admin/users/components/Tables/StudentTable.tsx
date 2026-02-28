"use client"

import { DataTable, ColumnDef } from "@/app/admin/grade/subject/components/DataTable"
import { Pencil, Trash2 } from "lucide-react"

const mockStudents = [
  {
    name: "Alex Singh",
    email: "alex.singh@example.com",
    grade: 5,
    phone: "1234567890",
    status: "active",
  },
  {
    name: "Alex Singh",
    email: "alex.singh@example.com",
    grade: 7,
    phone: "1234567890",
    status: "inactive",
  },
]

export default function StudentTable() {
  const columns: ColumnDef[] = [
    { id: "name", header: "Name", accessorKey: "name" },
    {
      id: "email",
      header: "Email",
      accessorKey: "email",
      cell: (value) => (
        <span className="text-gray-500 text-sm">{value}</span>
      ),
    },
    { id: "grade", header: "Grade", accessorKey: "grade" },
    { id: "phone", header: "Phone Number", accessorKey: "phone" },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            value === "active"
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

  return <DataTable columns={columns} data={mockStudents} />
}