"use client"

import * as React from "react"
import { FilterSection } from "@/app/admin/grade/subject/components/FilterOption"

type Role = "student" | "parent" | "tutor"

interface UsersFiltersProps {
  role: Role
  onSearch: (value: string) => void
}

export default function UsersFilters({ role, onSearch }: UsersFiltersProps) {

  const [roleValue, setRoleValue] = React.useState("all")
  const [statusValue, setStatusValue] = React.useState("all")
  const [specializationValue, setSpecializationValue] = React.useState("all")

  if (role === "tutor") {
    return (
      <FilterSection
        searchPlaceholder="Search by name"
        onSearch={onSearch}
        filters={[
          {
            label: "All Specializations",
            value: specializationValue,
            onChange: setSpecializationValue,
            options: [
              { label: "All Specializations", value: "all" },
              { label: "Mathematics", value: "math" },
              { label: "English", value: "english" },
            ],
          },
          {
            label: "All Status",
            value: statusValue,
            onChange: setStatusValue,
            options: [
              { label: "All Status", value: "all" },
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ],
          },
        ]}
      />
    )
  }

  return (
    <FilterSection
      searchPlaceholder="Search by name"
      onSearch={onSearch}
      filters={[
        {
          label: "All Roles",
          value: roleValue,
          onChange: setRoleValue,
          options: [
            { label: "All Roles", value: "all" },
            { label: "Parent", value: "parent" },
            { label: "Student", value: "student" },
          ],
        },
        {
          label: "All Status",
          value: statusValue,
          onChange: setStatusValue,
          options: [
            { label: "All Status", value: "all" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
        },
      ]}
    />
  )
}