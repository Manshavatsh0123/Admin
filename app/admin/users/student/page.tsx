"use client"

import { useState } from "react"
import UsersHeader from "../components/UsersHeader"
import UsersStats from "../components/UsersStats"
import UsersFilters from "../components/UsersFilters"
import StudentForm from "../components/Forms/StudentForm"
import StudentTable from "../components/Tables/StudentTable"

export default function StudentPage() {

  const [search, setSearch] = useState("")

  return (
    <>
      <UsersHeader role="student" />
      <StudentForm />
      <UsersStats role="student" />
      <UsersFilters role="student" onSearch={setSearch} />
      <StudentTable />
    </>
  )
}