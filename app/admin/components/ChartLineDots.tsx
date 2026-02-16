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

interface ChartLineDotsProps {
  data: {
    month: string
    revenue: number
  }[]
}

export function ChartLineDots({ data }: ChartLineDotsProps) {
  return (
    <div className="w-full cardIcon section-padding card-padding">
      <h2 className="text-[20px] font-semibold mb-6.25">
        Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis domain={[0, 3200]} />

          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#008130"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
