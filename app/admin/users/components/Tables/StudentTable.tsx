"use client"

import { DataTable, ColumnDef } from "@/components/DataForm/DataTable"
import { Pencil, Trash2 } from "lucide-react"

type Student = {
  name: string
  email: string
  grade: number
  phone: string
  status: "active" | "inactive"
}

const mockStudents: Student[] = [
  {
    name: "Alex Singh",
    email: "alex.singh@example.com",
    grade: 5,
    phone: "1234567890",
    status: "active",
  },
  {
    name: "Emma Patel",
    email: "emma.patel@example.com",
    grade: 5,
    phone: "9876543210",
    status: "active",
  },
  {
    name: "Arjun Kumar",
    email: "arjun.kumar@example.com",
    grade: 6,
    phone: "9123456789",
    status: "active",
  },
  {
    name: "Riya Sharma",
    email: "riya.sharma@example.com",
    grade: 6,
    phone: "9988776655",
    status: "active",
  },
  {
    name: "Kabir Mehta",
    email: "kabir.mehta@example.com",
    grade: 7,
    phone: "9090909090",
    status: "active",
  },
  {
    name: "Sara Khan",
    email: "sara.khan@example.com",
    grade: 7,
    phone: "9345678123",
    status: "inactive",
  },
]

export default function StudentTable() {

  const columns: ColumnDef<Student>[] = [
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
        <span className="text-gray-500 text-sm">{value}</span>
      ),
    },

    {
      id: "grade",
      header: "Grade",
      accessorKey: "grade",
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

  return (
    <DataTable<Student>
      columns={columns}
      data={mockStudents}
    />
  )
}