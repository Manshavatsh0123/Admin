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

interface BarChartsProps {
  data: {
    month: string
    Students: number
    Tutors: number
    Parents: number
  }[]
}

export default function BarCharts({ data }: BarChartsProps) {
  return (
    <div className="w-full cardIcon section-padding card-padding">

      <h2 className="text-[20px] font-semibold mb-6.25">
        User Growth by Type
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>

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
