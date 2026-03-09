"use client"

import React, { useEffect, useState } from "react"
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"

const queryClient = new QueryClient()

const Client = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const pathname = usePathname()

    useEffect(() => {
      if(pathname == "/login"){

        if(!isAuthenticated){
            setIsAuthenticated(true)
        }
      }
    },[pathname])

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            router.replace("/login")
        } else {
            setIsAuthenticated(true)
        }
    }, [router])

    if (isAuthenticated === null) {
        return null
    }

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Client