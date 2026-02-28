"use client"

import { useState } from "react"
import UsersHeader from "../components/UsersHeader"
import UsersStats from "../components/UsersStats"
import UsersFilters from "../components/UsersFilters"
import TutorForm from "../components/Forms/TutorForm"
import TutorTable from "../components/Tables/TutorTable"

export default function TutorPage() {

  const [search, setSearch] = useState("")

  return (
    <>
      <UsersHeader role="tutor" />
      <TutorForm />
      <UsersStats role="tutor" />
      <UsersFilters role="tutor" onSearch={setSearch} />
      <TutorTable />
    </>
  )
}