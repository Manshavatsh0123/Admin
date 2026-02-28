"use client"

import { useState } from "react"
import UsersHeader from "../components/UsersHeader"
import UsersStats from "../components/UsersStats"
import UsersFilters from "../components/UsersFilters"
import ParentForm from "../components/Forms/ParentForm"
import ParentTable from "../components/Tables/ParentTable"

export default function ParentPage() {

  const [search, setSearch] = useState("")

  return (
    <>
      <UsersHeader role="parent" />
      <ParentForm />
      <UsersStats role="parent" />
      <UsersFilters role="parent" onSearch={setSearch} />
      <ParentTable />
    </>
  )
}