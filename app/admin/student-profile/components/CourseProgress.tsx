"use client"

export default function CourseProgress() {

  const courses = [
    { name: "GCSE Mathematics", progress: 60 },
    { name: "GCSE English", progress: 70 },
    { name: "Non-verbal reasoning", progress: 80 },
    { name: "Verbal Reasoning", progress: 80 },
    { name: "Secondary Science", progress: 80 },
  ]

  return (
    <div className="bg-white rounded-xl p-6.25 border">

      <h3 className="text-[16px] font-semibold mb-4">Course Progress</h3>

      <div className="space-y-5">

        {courses.map((course, i) => (
          <div key={i}>

            <div className="flex justify-between text-sm mb-2">
              <span className="text-[14px] font-semibold">{course.name}</span>
              <span className="text-[#D33122] text-[16px] font-semibold">{course.progress}%</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-[#D33122] h-2 rounded"
                style={{ width: `${course.progress}%` }}
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
