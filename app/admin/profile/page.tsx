"use client"

import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import PageInfoBar from "@/components/global/PageInfoBar"
import { useQuery } from "@tanstack/react-query"
import apiClient from "@/lib/network"

export default function ProfilePage() {

  const { data, isLoading } = useQuery({

    queryKey: ["adminProfile"],

    queryFn: async () => {

      const token = localStorage.getItem("token")

      const response = await apiClient.get("/admin/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("PROFILE API:", response.data)

      return response.data
    }

  })

  const profile = data || {}
  
  if (isLoading) {
    return <p className="p-6">Loading profile...</p>
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <PageInfoBar
          showBack={true}
          title="Admin Profile"
          description="System Administrator"
        />

        <Button className="bg-[#CE3820] hover:bg-[#CE3820]/90 text-white">
          Edit Profile
        </Button>

      </div>

      {/* Profile Info */}

      <div className="rounded-[16px] border">

        <CardContent className="p-6">

          <h2 className="text-[24px] font-semibold mb-6">
            Profile Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}

            <div className="space-y-6">

              <div>
                <p className="text-[16px] font-semibold mb-1">
                  About Me
                </p>

                <p className="text-[14px] max-w-[400px] text-muted-foreground leading-relaxed">
                  {profile.about || "No description available"}
                </p>
              </div>

              <div>
                <p className="text-[16px] font-semibold mb-1">
                  Role
                </p>

                <p className="text-[16px] text-muted-foreground">
                  {profile.role || "Administrator"}
                </p>
              </div>

              <div>
                <p className="text-[16px] font-semibold mb-1">
                  Department
                </p>

                <p className="text-[16px] text-muted-foreground">
                  {profile.department || "Platform Management"}
                </p>
              </div>

            </div>

            {/* RIGHT */}

            <div>

              <p className="text-[16px] font-semibold mb-4">
                Contact Information
              </p>

              <div className="space-y-5">

                {/* EMAIL */}

                <div className="flex items-start gap-3">

                  <Mail className="h-5 w-5 mt-1 text-muted-foreground" />

                  <div>
                    <p className="text-[16px] text-muted-foreground">
                      Email
                    </p>

                    <p className="text-[16px] font-medium">
                      {profile.email || "N/A"}
                    </p>
                  </div>

                </div>

                {/* PHONE */}

                <div className="flex items-start gap-3">

                  <Phone className="h-5 w-5 mt-1 text-muted-foreground" />

                  <div>
                    <p className="text-[16px] text-muted-foreground">
                      Phone
                    </p>

                    <p className="text-[16px] font-medium">
                      {profile.phone || "N/A"}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </CardContent>

      </div>

    </div>
  )
}