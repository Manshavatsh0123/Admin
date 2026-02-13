"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { month: "Jan", Students: 8, Tutors: 5, Parents: 12 },
  { month: "Feb", Students: 22, Tutors: 6, Parents: 15 },
  { month: "Mar", Students: 28, Tutors: 10, Parents: 18 },
  { month: "Apr", Students: 35, Tutors: 12, Parents: 25 },
  { month: "May", Students: 42, Tutors: 15, Parents: 28 },
  { month: "Jun", Students: 62, Tutors: 22, Parents: 18 },
]

export default function BarCharts() {
  return (
    <div className="w-full rounded-lg border bg-white p-6.25 shadow-sm mt-7.5">

      <h2 className="text-[20px] font-semibold mb-4">
        User Growth by Type
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis domain={[0, 80]} />

          <Tooltip />
          <Legend />

          <Bar dataKey="Students" fill="#5E19F3" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Tutors" fill="#DE3000" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Parents" fill="#00B2D6" radius={[4, 4, 0, 0]} />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}