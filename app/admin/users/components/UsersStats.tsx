"use client"

import { StatCard } from "@/components/global/StatCard"

type Role = "student" | "parent" | "tutor"

interface UsersStatsProps {
  role: Role
}

export default function UsersStats({ role }: UsersStatsProps) {

  if (role === "tutor") {
    return (
      <div className="grid grid-cols-3 gap-6 card-padding">
        <StatCard label="Total Tutors" value={5} />
        <StatCard label="Active Tutors" value={7} />
        <StatCard label="Total Students" value={555} />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-6 card-padding">
      <StatCard label="Total Users" value={5} />
      <StatCard label="Students" value={5} />
      <StatCard label="Parents" value={5} />
    </div>
  )
}