"use client"
import PageInfoBar from "@/components/global/PageInfoBar"
import BarCharts from "./components/BarCharts"
import { Cards } from "./components/Cards"
import { ChartLineDots } from "./components/ChartLineDots"
import QuickStatsPage from "./components/QuickStatsPage"


const AdminDashboard = () => {

  return (
    <>
      <PageInfoBar
        title="Admin Dashboard"
        description="Platform overview and management" />

      <div className="grid lg:grid-cols-4 gap-6.25 card-padding">
        <Cards
          icon={<i className="fa-regular fa-user"></i>}
          title="Total Users"
          value="1,620"
          percentage="+12.5%"
        />
        <Cards
          icon={<i className="fa-regular fa-arrow-trend-up"></i>}
          title="Monthly Revenue"
          value="$32,000"
          percentage="+23.1%"
        />
        <Cards
          icon={<i className="fa-regular fa-wave-pulse"></i>}
          title="Active Sessions"
          value="245"
          percentage="+8.2%"
        />
        <Cards
          icon={<i className="fa-regular fa-chart-column"></i>}
          title="Course Completion"
          value="87.4%"
          percentage="+3.6%"
        />
      </div>

      <ChartLineDots />
      <BarCharts />
      <QuickStatsPage />

    </>
  )
}

export default AdminDashboard