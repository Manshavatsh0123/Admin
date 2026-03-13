"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable, ColumnDef } from "@/components/DataForm/DataTable"
import { Pencil, Trash2 } from "lucide-react"
import apiClient from "@/lib/network"

type Student = {
  name: string
  email: string
  grade: string
  phone: string
  status: "active" | "inactive"
}

export default function StudentTable() {

  const { data, isLoading } = useQuery({

    queryKey: ["students"],

    queryFn: async () => {

      const token = localStorage.getItem("token")

      const response = await apiClient.get("/students", {
        params: {
          page: 1,
          perPage: 10,
          search: "",
          grade: "",
          isActive: ""
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("STUDENTS API:", response.data)

      return response.data
    }

  })

  const students: Student[] =
    data?.items?.map((student: any) => ({
      name: student.name,
      email: student.email,
      grade: student.grade,
      phone: student.phone,
      status: student.isActive ? "active" : "inactive"
    })) || []

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

  if (isLoading) return <p className="p-4">Loading...</p>

  return (
    <DataTable<Student>
      columns={columns}
      data={students}
    />
  )
}