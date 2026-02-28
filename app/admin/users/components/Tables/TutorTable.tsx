"use client"

import { DataTable, ColumnDef } from "@/app/admin/grade/subject/components/DataTable"
import { Pencil, Trash2 } from "lucide-react"

const mockTutors = [
  {
    name: "Dr. Priya Sharma",
    specialization: "Mathematics",
    courses: 3,
    students: 125,
    experience: "8 yrs",
    status: "active",
  },
  {
    name: "Sneha Patel",
    specialization: "Mathematics",
    courses: 3,
    students: 112,
    experience: "7 yrs",
    status: "inactive",
  },
]

export default function TutorTable() {
  const columns: ColumnDef[] = [
    { id: "name", header: "Tutor Name", accessorKey: "name" },
    { id: "specialization", header: "Specialization", accessorKey: "specialization" },
    { id: "courses", header: "Courses", accessorKey: "courses" },
    { id: "students", header: "Students", accessorKey: "students" },
    { id: "experience", header: "Experience", accessorKey: "experience" },
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
      cell: () => (
        <div className="flex gap-4">
          <Pencil className="w-4 h-4 cursor-pointer hover:text-gray-600" />
          <Trash2 className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-600" />
        </div>
      ),
    },
  ]

  return <DataTable columns={columns} data={mockTutors} />
}