"use client"

import { DataTable, ColumnDef } from "@/app/admin/grade/subject/components/DataTable"
import { Pencil, Trash2 } from "lucide-react"

type Tutor = {
  name: string
  email: string
  specialization: string
  courses: number
  students: number
  experience: string
  status: "active" | "inactive"
}

const mockTutors: Tutor[] = [
  {
    name: "Dr. Priya Sharma",
    email: "priya.sharma@example.com",
    specialization: "Mathematics",
    courses: 3,
    students: 125,
    experience: "8 yrs",
    status: "active",
  },
  {
    name: "Arpita Singh",
    email: "arpita.singh@example.com",
    specialization: "English",
    courses: 2,
    students: 98,
    experience: "6 yrs",
    status: "active",
  },
  {
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    specialization: "Mathematics",
    courses: 4,
    students: 156,
    experience: "10 yrs",
    status: "active",
  },
  {
    name: "Vikram Gupta",
    email: "vikram.gupta@example.com",
    specialization: "Mathematics",
    courses: 2,
    students: 87,
    experience: "5 yrs",
    status: "active",
  },
  {
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    specialization: "Mathematics",
    courses: 3,
    students: 112,
    experience: "7 yrs",
    status: "inactive",
  },
]

export default function TutorTable() {

  const columns: ColumnDef<Tutor>[] = [
    {
      id: "name",
      header: "Tutor Name",
      accessorKey: "name",
      cell: (value, row) => (
        <div>
          <p className="font-medium">{value}</p>
          <p className="text-sm text-gray-500">{row.email}</p>
        </div>
      ),
    },
    {
      id: "specialization",
      header: "Specialization",
      accessorKey: "specialization",
    },
    {
      id: "courses",
      header: "Courses",
      accessorKey: "courses",
    },
    {
      id: "students",
      header: "Students",
      accessorKey: "students",
    },
    {
      id: "experience",
      header: "Experience",
      accessorKey: "experience",
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
      accessorKey: "name",
      cell: (_, row) => (
        <div className="flex gap-4">
          <Pencil
            className="w-4 h-4 cursor-pointer hover:text-gray-600"
            onClick={() => console.log("Edit", row)}
          />
          <Trash2
            className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-600"
            onClick={() => console.log("Delete", row)}
          />
        </div>
      ),
    },
  ]

  return <DataTable columns={columns} data={mockTutors} />
}