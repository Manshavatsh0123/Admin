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

const chartData = [
  { month: "Jan", revenue: 1000 },
  { month: "Feb", revenue: 1200 },
  { month: "Mar", revenue: 1800 },
  { month: "Apr", revenue: 2100 },
  { month: "May", revenue: 2600 },
  { month: "Jun", revenue: 3000 },
]

export function ChartLineDots() {
  return (
    <div className="w-full p-6 border rounded-lg p-6.25 shadow-sm mt-7.5 bg-white">
      <h2 className="text-[20px] font-semibold mb-4">Revenue Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>

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