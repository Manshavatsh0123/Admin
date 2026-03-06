"use client"
import PageInfoBar from '@/components/global/PageInfoBar'
import { StatCard } from '@/components/global/StatCard'
import BulkForm from './components/BulkForm'
import { ColumnDef, DataTable } from '../../../components/DataForm/DataTable'
import { FileText } from "lucide-react"

type UploadHistory = {
  filename: string
  course: string
  questions: number
  date: string
  status: "completed" | "processing"
}

const uploadHistoryData: UploadHistory[] = [
  {
    filename: "Maths_Questions_Jan2026.csv",
    course: "Mathematics",
    questions: 250,
    date: "2026-01-15",
    status: "completed",
  },
  {
    filename: "English_Literature_MCQ.xlsx",
    course: "English",
    questions: 180,
    date: "2026-01-14",
    status: "completed",
  },
  {
    filename: "Science_Questions.csv",
    course: "Science",
    questions: 320,
    date: "2026-01-13",
    status: "processing",
  },
]

export default function Page() {

  const columns: ColumnDef<UploadHistory>[] = [
    {
      id: "filename",
      header: "Filename",
      accessorKey: "filename",
      cell: (value) => (
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-500" />
          <span className="font-medium text-gray-800">{value}</span>
        </div>
      ),
    },
    {
      id: "course",
      header: "Course",
      accessorKey: "course",
      cell: (value) => (
        <span className="text-gray-600">{value}</span>
      ),
    },
    {
      id: "questions",
      header: "Questions",
      accessorKey: "questions",
    },
    {
      id: "date",
      header: "Date",
      accessorKey: "date",
      cell: (value) => (
        <span className="text-gray-600">{value}</span>
      ),
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${value === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
            }`}
        >
          {value === "completed" ? "Completed" : "Processing"}
        </span>
      ),
    },
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
      </div>

      <BulkForm />

      <DataTable columns={columns} data={uploadHistoryData} />

    </>
  );
}
