"use client"

import { useState, useMemo } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"
import { FilterSection } from "../grade/subject/components/FilterOption"
import { DataTable, ColumnDef } from "../grade/subject/components/DataTable"
import { Pencil, Trash2, Star } from "lucide-react"

const mockTutors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    email: "priya.sharma@example.com",
    specialization: "Mathematics",
    courses: 3,
    students: 125,
    experience: "8 yrs",
    rating: 4.2,
    status: "active",
  },
  {
    id: 2,
    name: "Arpita Singh",
    email: "arpita.singh@example.com",
    specialization: "English",
    courses: 2,
    students: 98,
    experience: "6 yrs",
    rating: 4.2,
    status: "active",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    specialization: "Mathematics",
    courses: 4,
    students: 156,
    experience: "10 yrs",
    rating: 4.2,
    status: "active",
  },
  {
    id: 4,
    name: "Vikram Gupta",
    email: "vikram.gupta@example.com",
    specialization: "Mathematics",
    courses: 2,
    students: 87,
    experience: "5 yrs",
    rating: 4.2,
    status: "active",
  },
  {
    id: 5,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    specialization: "Mathematics",
    courses: 3,
    students: 112,
    experience: "7 yrs",
    rating: 4.2,
    status: "inactive",
  },
]

export const TutorsPage = () => {
  const [search, setSearch] = useState("")
  const [specialization, setSpecialization] = useState("all")
  const [status, setStatus] = useState("all")

  const filteredData = useMemo(() => {
    return mockTutors.filter((tutor) => {
      const matchSearch =
        tutor.name.toLowerCase().includes(search.toLowerCase())

      const matchSpec =
        specialization === "all" ||
        tutor.specialization === specialization

      const matchStatus =
        status === "all" || tutor.status === status

      return matchSearch && matchSpec && matchStatus
    })
  }, [search, specialization, status])

  const columns: ColumnDef[] = [
    {
      id: "name",
      header: "Tutor Name",
      accessorKey: "name",
      cell: (value, row) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-gray-500">
            {row.email}
          </div>
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
      id: "rating",
      header: "Ratings",
      accessorKey: "rating",
      cell: (value) => (
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500" />
          {value}
        </div>
      ),
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
      accessorKey: "id",
      cell: (_, row) => (
        <div className="flex gap-4">
          <Pencil
            className="w-4 h-4 cursor-pointer hover:text-gray-600"
            onClick={() => console.log("Edit", row)}
          />
          <Trash2
            className="w-4 h-4 cursor-pointer hover:text-red-600"
            onClick={() => console.log("Delete", row)}
          />
        </div>
      ),
    },
  ]

  const totalTutors = mockTutors.length
  const activeTutors = mockTutors.filter(
    (t) => t.status === "active"
  ).length
  const totalStudents = mockTutors.reduce(
    (acc, curr) => acc + curr.students,
    0
  )

  return (
    <>
      <PageInfoBar
        title="All Tutors"
        description="Manage tutors and view their performance metrics"
        actionButtonLabel="Add New Tutor"
      />

      <div className="grid grid-cols-3 gap-4 card-padding">
        <StatCard label="Total Tutors" value={totalTutors} />
        <StatCard label="Active Tutors" value={activeTutors} />
        <StatCard label="Total Students" value={totalStudents} />
      </div>

      <FilterSection
        searchPlaceholder="Search by name"
        filters={[
          {
            label: "All Specializations",
            options: [
              { label: "All Specializations", value: "all" },
              { label: "Mathematics", value: "Mathematics" },
              { label: "English", value: "English" },
            ],
            value: specialization,
            onChange: setSpecialization,
          },
        //   {
        //     label: "All Status",
        //     options: [
        //       { label: "All Status", value: "all" },
        //       { label: "Active", value: "active" },
        //       { label: "Inactive", value: "inactive" },
        //     ],
        //     value: status,
        //     onChange: setStatus,
        //   },
        ]}
        onSearch={setSearch}
      />

      <div className="mt-6">
        <DataTable columns={columns} data={filteredData} />
      </div>
    </>
  )
}
