"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface ChartLineStudentProps {
  data: {
    week: string
    score: number
  }[]
}

export function ChartLineStudent({ data }: ChartLineStudentProps) {
  return (
    <div className="w-full cardIcon section-padding card-padding rounded-2xl">
      <h2 className="text-[20px] font-semibold mb-6">
        Performance Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis dataKey="week" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Legend
            wrapperStyle={{
              color: "#CE371F",
            }}
          />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#CE371F"
            strokeWidth={2}
            dot={{
              r: 5,
              fill: "#ffffff",
              stroke: "#CE371F",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 7,
              fill: "#ffffff",
              stroke: "#CE371F",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
