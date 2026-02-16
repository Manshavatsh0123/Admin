import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ChartData {
  name: string
  value: number
}

interface ChartSectionProps {
  title: string
  data: ChartData[]
  height?: number
  color?: string
}

export function ChartSection({
  title,
  data,
  height = 300,
  color = "#ef4444",
}: ChartSectionProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
