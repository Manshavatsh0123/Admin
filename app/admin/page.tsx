"use client"
import PageInfoBar from "@/components/global/PageInfoBar"
import BarCharts from "./components/BarCharts"
import { Cards } from "./components/Cards"
import { ChartLineDots } from "./components/ChartLineDots"
import QuickStatsPage from "./components/QuickStatsPage"
import { Users, TrendingUp, Activity, BarChart3 } from "lucide-react"
import RecentActivity from "./components/RecentActivity"


const AdminDashboard = () => {

  const chartData = [
    { month: "Jan", revenue: 1000 },
    { month: "Feb", revenue: 1200 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2100 },
    { month: "May", revenue: 2600 },
    { month: "Jun", revenue: 3000 },
  ]

  const BarchartData = [
    { month: "Jan", Students: 8, Tutors: 5, Parents: 12 },
    { month: "Feb", Students: 22, Tutors: 6, Parents: 15 },
    { month: "Mar", Students: 28, Tutors: 10, Parents: 18 },
    { month: "Apr", Students: 35, Tutors: 12, Parents: 25 },
    { month: "May", Students: 42, Tutors: 15, Parents: 28 },
    { month: "Jun", Students: 62, Tutors: 22, Parents: 18 },
  ]

  const stats = [
    { label: "Total Courses", value: "156" },
    { label: "Total Tests", value: "2,847" },
    { label: "Avg Session Duration", value: "58 min" },
  ]

  const activities = [
    {
      title: "New Student",
      subtitle: "Rahul Singh",
      time: "2 hours ago",
    },
    {
      title: "New Tutor",
      subtitle: "Dr. Priya Sharma",
      time: "4 hours ago",
    },
    {
      title: "Payment Received",
      subtitle: "₹5,000",
      time: "8 hours ago",
    },
  ]

  return (
    <>
      <PageInfoBar
        title="Admin Dashboard"
        description="Platform overview and management"
      />

      <div className="grid lg:grid-cols-4 gap-6.25 card-padding card-padding">
        <Cards
          icon={<Users size={20} />}
          title="Total Users"
          value="1,620"
          percentage="+12.5%"
        />

        <Cards
          icon={<TrendingUp size={20} />}
          title="Monthly Revenue"
          value="$32,000"
          percentage="+23.1%"
        />

        <Cards
          icon={<Activity size={20} />}
          title="Active Sessions"
          value="245"
          percentage="+8.2%"
        />

        <Cards
          icon={<BarChart3 size={20} />}
          title="Course Completion"
          value="87.4%"
          percentage="+3.6%"
        />
      </div>

      <ChartLineDots data={chartData} />

      <BarCharts data={BarchartData} />

      <div className="card-padding grid grid-cols-2 gap-6.25">
        <QuickStatsPage stats={stats} />
        <RecentActivity activities={activities} />
      </div>

    </>
  )
}

export default AdminDashboard