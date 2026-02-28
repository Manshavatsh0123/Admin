"use client"
import PageInfoBar from '@/components/global/PageInfoBar'
import { StatCard } from '@/components/global/StatCard'
import BulkForm from './components/BulkForm'
import { ColumnDef, DataTable } from '../grade/subject/components/DataTable'
import { Pencil, Trash2 } from 'lucide-react'
import { StatusBadge } from '../grade/subject/components/StatusBadge'

const mockData = [
  {
    id: 1,
    grade: "Grade 4",
    subjectName: "Math Basics",
    level: "GCSE",
    status: "active",
  },
  {
    id: 2,
    grade: "Grade 5",
    subjectName: "English Literature",
    level: "Secondary",
    status: "active",
  },
  {
    id: 3,
    grade: "Grade 7",
    subjectName: "Science Methods",
    level: "Primary",
    status: "active",
  },
  {
    id: 4,
    grade: "Grade 6",
    subjectName: "Reasoning Concepts",
    level: "Primary",
    status: "active",
  },
  {
    id: 5,
    grade: "Grade 5",
    subjectName: "Reasoning Foundation",
    level: "Secondary",
    status: "draft",
  },
]

export default function Page() {

  const columns: ColumnDef[] = [
    {
      id: "grade",
      header: "Grades",
      accessorKey: "grade",
    },
    {
      id: "subjectName",
      header: "Subject Name",
      accessorKey: "subjectName",
    },
    {
      id: "level",
      header: "Level",
      accessorKey: "level",
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value: string) => (
        <StatusBadge
          status={value === "active" ? "active" : "pending"}
          label={value === "active" ? "Active" : "Draft"}
        />
      ),
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "id",
      cell: (_: any, row?: any) => (
        <div className="flex items-center gap-4">
          <Pencil
            className="w-4 h-4 text-black cursor-pointer hover:text-gray-600"
            onClick={(e) => {
              e.stopPropagation()
              console.log("Edit", row)
            }}
          />
          <Trash2
            className="w-4 h-4 text-gray-600 cursor-pointer hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation()
              console.log("Delete", row)
            }}
          />
        </div>
      ),
    }

  ]

  return (
    <>
      <PageInfoBar
        title="Bulk MCQ Upload"
        description="Upload multiple choice questions in bulk for courses"
      />

      <div className="grid grid-cols-3 gap-4 card-padding">
        <StatCard label="Total Uploads" value={5} />
        <StatCard label="Total Questions" value="500" />
        <StatCard label="Success Rate" value="67%" />
      </div>

      <BulkForm />

      <DataTable columns={columns} data={mockData} />

    </>
  );
}
