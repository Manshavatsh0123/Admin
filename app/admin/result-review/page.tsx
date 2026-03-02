"use client"

import { useState, useMemo } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { FilterSection } from "@/app/admin/grade/subject/components/FilterOption"
import { DataTable, ColumnDef } from "@/app/admin/grade/subject/components/DataTable"
import { Eye } from "lucide-react"

type Result = {
  resultType: "Assessment" | "Assignment"
  course: string
  chapter: string
  user: string
  timeTaken: string
  score: number
  status: "pass" | "fail"
}

const results: Result[] = [
  {
    resultType: "Assessment",
    course: "Mathematics",
    chapter: "Algebra",
    user: "Alex Singh",
    timeTaken: "50:45",
    score: 91,
    status: "pass",
  },
  {
    resultType: "Assignment",
    course: "English",
    chapter: "Integration",
    user: "Rahul Singh",
    timeTaken: "20:45",
    score: 85,
    status: "pass",
  },
  {
    resultType: "Assessment",
    course: "Science",
    chapter: "Algebra",
    user: "Rahul Singh",
    timeTaken: "50:45",
    score: 91,
    status: "pass",
  },
  {
    resultType: "Assessment",
    course: "Reasoning",
    chapter: "Algebra",
    user: "Shrishti Singh",
    timeTaken: "20:45",
    score: 85,
    status: "pass",
  },
  {
    resultType: "Assignment",
    course: "Mathematics",
    chapter: "Algebra",
    user: "Den Singh",
    timeTaken: "50:45",
    score: 40,
    status: "fail",
  },
]

export default function ResultReviewPage() {
  const [search, setSearch] = useState("")

  const filteredData = useMemo(() => {
    return results.filter((item) =>
      item.resultType.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  const columns: ColumnDef<Result>[] = [
    { id: "resultType", header: "Result Type", accessorKey: "resultType" },
    { id: "course", header: "Course", accessorKey: "course" },
    { id: "chapter", header: "Chapter", accessorKey: "chapter" },
    { id: "user", header: "User", accessorKey: "user" },
    { id: "timeTaken", header: "Time Taken", accessorKey: "timeTaken" },
    {
      id: "score",
      header: "Score",
      accessorKey: "score",
      cell: (value) => `${value}%`,
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            value === "pass"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {value === "pass" ? "Pass" : "Fail"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "user",
      cell: () => (
        <Eye className="w-4 h-4 cursor-pointer hover:text-gray-600" />
      ),
    },
  ]

  return (
    <div className="space-y-6">

      <PageInfoBar
        title="Result Management"
        description="Review exam results for your learners"
      />

      <FilterSection
        searchPlaceholder="Search by type"
        onSearch={setSearch}
      />

      <DataTable<Result>
        columns={columns}
        data={filteredData}
      />

    </div>
  )
}