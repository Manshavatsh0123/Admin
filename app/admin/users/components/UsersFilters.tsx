"use client"

import { FilterSection } from "@/app/admin/grade/subject/components/FilterOption"

type Role = "student" | "parent" | "tutor"

interface UsersFiltersProps {
  role: Role
  onSearch: (value: string) => void
}

export default function UsersFilters({ role, onSearch }: UsersFiltersProps) {

  if (role === "tutor") {
    return (
      <FilterSection
        searchPlaceholder="Search by name"
        onSearch={onSearch}
        filters={[
          {
            label: "All Specializations",
            options: [
              { label: "All", value: "all" },
              { label: "Mathematics", value: "math" },
              { label: "English", value: "english" },
            ],
          },
          {
            label: "All Status",
            options: [
              { label: "All", value: "all" },
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
          options: [
            { label: "All Roles", value: "all" },
            { label: "Parent", value: "parent" },
            { label: "Student", value: "student" },
          ],
        },
        {
          label: "All Status",
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