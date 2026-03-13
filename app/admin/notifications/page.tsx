"use client"

import { useQuery } from "@tanstack/react-query"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"
import { FilterSection } from "../../../components/DataForm/FilterOption"
import NotificationForm from "./components/NotificationForm"
import NotificationList from "./components/NotificationItem"
import apiClient from "@/lib/network"

type Notification = {
  id: string
  title: string
  message: string
  audience: string
  date: string
}

export default function Page() {

  const { data, isLoading } = useQuery({

    queryKey: ["notifications"],

    queryFn: async () => {

      const token = localStorage.getItem("token")

      const response = await apiClient.get("/notifications", {
        params: {
          page: 1,
          perPage: 10
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("NOTIFICATIONS API:", response.data)

      return response.data
    }

  })

  const formatDate = (date: string) => {
    if (!date) return "N/A"

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  const notifications: Notification[] =
    data?.items?.map((item: any) => ({
      id: item.id,
      title: item.title,
      message: item.message,
      audience: item.audience || "All Users",
      date: formatDate(item.createdAt)
    })) || []


  if (isLoading) {
    return <p className="p-6">Loading notifications...</p>
  }

  return (
    <>
      <PageInfoBar
        title="Notifications"
        description="Send announcements and updates to users"
        actionButtonLabel="Create Notification"
      />

      <NotificationForm />

      {/* Stats */}

      <div className="grid grid-cols-3 gap-4 card-padding">
        <StatCard label="Total Notifications" value={data?.total || 0} />
        <StatCard label="Total Sent" value="400" />
        <StatCard label="Test statics" value="70%" />
      </div>


      <FilterSection
        searchPlaceholder="Search notification..."
        onSearch={(value) => console.log(value)}
      />

      <NotificationList
        notifications={notifications}
        onDelete={(id) => console.log("Delete", id)}
      />
    </>
  )
}