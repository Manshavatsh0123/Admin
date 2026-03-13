"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable, ColumnDef } from "@/components/DataForm/DataTable"
import { Pencil, Trash2 } from "lucide-react"
import apiClient from "@/lib/network"

type Parent = {
  name: string
  email: string
  relationship: "Father" | "Mother" | "Guardian"
  children: number
  phone: string
  status: "active" | "inactive"
}

export default function ParentTable() {


  const { data, isLoading } = useQuery({

    queryKey: ["parents"],

    queryFn: async () => {

      const token = localStorage.getItem("token")

      const response = await apiClient.get("/parents", {
        params: {
          page: 1,
          perPage: 10,
          search: "",
          isActive: ""
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("PARENTS API:", response.data)

      return response.data
    }

  })

  const parents: Parent[] =
    data?.items?.map((parent: any) => ({
      name: parent.name,
      email: parent.email,
      relationship: parent.relationship || "Guardian",
      children: parent.childrenCount || 0,
      phone: parent.phone,
      status: parent.isActive ? "active" : "inactive"
    })) || []

  const columns: ColumnDef<Parent>[] = [

    { id: "name", header: "Name", accessorKey: "name" },

    {
      id: "email",
      header: "Email",
      accessorKey: "email",
      cell: (value) => (
        <span className="text-gray-500 text-sm">{value}</span>
      ),
    },

    {
      id: "relationship",
      header: "Relationship",
      accessorKey: "relationship"
    },

    {
      id: "children",
      header: "Enrolled Childs",
      accessorKey: "children"
    },

    {
      id: "phone",
      header: "Phone Number",
      accessorKey: "phone"
    },

    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            value === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {value === "active" ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      id: "actions",
      header: "Actions",
      accessorKey: "email",
      cell: () => (
        <div className="flex gap-4">
          <Pencil className="w-4 h-4 cursor-pointer hover:text-gray-600" />
          <Trash2 className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-600" />
        </div>
      ),
    },
  ]

  if (isLoading) {
    return <p className="p-4">Loading parents...</p>
  }

  return (
    <DataTable<Parent>
      columns={columns}
      data={parents}
    />
  )
}