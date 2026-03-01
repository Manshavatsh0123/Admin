"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import UsersHeader from "../components/UsersHeader"
import UsersStats from "../components/UsersStats"
import UsersFilters from "../components/UsersFilters"
import TutorTable from "../components/Tables/TutorTable"

export default function TutorPage() {

  const router = useRouter()
  const [search, setSearch] = useState("")

  return (
    <>
      <UsersHeader
        role="tutor"
        onAdd={() => router.push("/admin/users/tutor/new")}
      />
      <UsersStats role="tutor" />
      <UsersFilters role="tutor" onSearch={setSearch} />
      <TutorTable />
    </>
  )
}