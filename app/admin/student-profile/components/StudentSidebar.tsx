"use client"

interface Student {
  name: string
  courses: number
  progress: number
  active?: boolean
}

interface StudentSidebarProps {
  students: Student[]
  title?: string
}

export default function StudentSidebar({
  students,
  title = "Students",
}: StudentSidebarProps) {
  return (
    <div className="bg-white rounded-[16px] py-4 border h-full">

      <div className="p-2.5">
        <h1 className="text-[16px] mb-2.5 font-medium">
          {title}
        </h1>

        <input
          placeholder="Search..."
          className="w-full border rounded-lg px-3 py-2 mb-4 text-sm"
        />
      </div>

      <div className="space-y-3">
        {students.map((student, i) => (
          <div
            key={i}
            className={`p-3 cursor-pointer transition-all ${
              student.active
                ? "bg-[#CE371F]/10 border-l-4 border-[#D33122]"
                : ""
            }`}
          >
            <p className="text-[16px] font-medium">
              {student.name}
            </p>

            <p className="text-[12px] text-gray-500 mt-1">
              {student.courses} courses
            </p>

            <div className="w-full bg-gray-200 h-2 mt-2 rounded">
              <div
                className="bg-[#D33122] h-2 rounded"
                style={{ width: `${student.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
