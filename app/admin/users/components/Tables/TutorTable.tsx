"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable, ColumnDef } from "@/components/DataForm/DataTable"
import { Pencil, Trash2 } from "lucide-react"
import apiClient from "@/lib/network"

type Tutor = {
  name: string
  email: string
  specialization: string
  courses: number
  students: number
  experience: string
  status: "active" | "inactive"
}

export default function TutorTable() {

  /* ---------------- FETCH TUTORS ---------------- */

  const { data, isLoading } = useQuery({
    queryKey: ["tutors"],

    queryFn: async () => {

      const token = localStorage.getItem("token")

      const response = await apiClient.get("/tutors", {
        params: {
          page: 1,
          perPage: 10,
          search: "",
          isActive: ""
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("TUTORS API:", response.data)

      return response.data
    }
  })

  /* ---------------- CALCULATE EXPERIENCE ---------------- */

  const getExperience = (createdAt: string) => {

    if (!createdAt) return "N/A"

    const startYear = new Date(createdAt).getFullYear()
    const currentYear = new Date().getFullYear()

    return `${currentYear - startYear} yrs`
  }

  /* ---------------- MAP API DATA ---------------- */

  const tutors: Tutor[] =
    data?.items?.map((tutor: any) => ({
      name: tutor.name,
      email: tutor.email,
      specialization: tutor.specialization || "General",
      courses: tutor.coursesCount || 0,
      students: tutor.studentsCount || 0,
      experience: getExperience(tutor.createdAt),
      status: tutor.isActive ? "active" : "inactive"
    })) || []

  /* ---------------- TABLE COLUMNS ---------------- */

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

  if (isLoading) {
    return <p className="p-4">Loading tutors...</p>
  }

  return (
    <DataTable<Tutor>
      columns={columns}
      data={tutors}
    />
  )
}