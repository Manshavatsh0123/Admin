"use client"

import PageInfoBar from "@/components/global/PageInfoBar"

type Role = "student" | "parent" | "tutor"

interface UsersHeaderProps {
  role: Role
  onAdd?: () => void   // ✅ ADD THIS
}

export default function UsersHeader({ role, onAdd }: UsersHeaderProps) {

  const config = {
    student: {
      title: "User Management",
      description: "Manage students users",
      button: "Add Student",
    },
    parent: {
      title: "User Management",
      description: "Manage parent users",
      button: "Add Parent",
    },
    tutor: {
      title: "All Tutors",
      description: "Manage tutors and view their performance metrics",
      button: "Add New Tutor",
    },
  }

  const current = config[role]

  return (
    <PageInfoBar
      title={current.title}
      description={current.description}
      actionButtonLabel={current.button}
      onActionClick={onAdd}   // ✅ pass it here
    />
  )
}