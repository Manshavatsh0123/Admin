"use client"

import AdminLayout from "@/components/global/AdminLayout"
import { ReactNode } from "react"


export default function UsersLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    
      <div className="space-y-8">
        {children}
      </div>
  
  )
}