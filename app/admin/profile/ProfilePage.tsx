"use client"

import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"

export default function ProfilePage() {
    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <PageInfoBar showBack={true} title="Admin Profile" description="System Administrator" />

                <Button className="bg-[#CE3820] hover:bg-[#CE3820]/90 text-white">
                    Edit Profile
                </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 card-padding">
                <StatCard label="Security Level" value="High" />
                <StatCard label="Account Status" value="Active" />
            </div>

            {/* Profile Info */}
            <div className="rounded-[16px] border">
                <CardContent className="p-6">

                    {/* Title */}
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
                                    Dedicated to maintaining platform stability and ensuring optimal
                                    performance for all users
                                </p>
                            </div>

                            <div>
                                <p className="text-[16px] font-semibold mb-1">
                                    Role
                                </p>
                                <p className="text-[16px] text-muted-foreground">
                                    System Administrator
                                </p>
                            </div>

                            <div>
                                <p className="text-[16px]font-semibold mb-1">
                                    Department
                                </p>
                                <p className="text-[16px] text-muted-foreground">
                                    Platform Management
                                </p>
                            </div>

                        </div>

                        {/* RIGHT */}
                        <div>

                            <p className="text-[16px] font-semibold mb-4">
                                Contact Information
                            </p>

                            <div className="space-y-5">

                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 mt-1 text-muted-foreground" />
                                    <div>
                                        <p className="text-[16px] text-muted-foreground">
                                            Email
                                        </p>
                                        <p className="text-[16px] font-medium">
                                            xyz@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 mt-1 text-muted-foreground" />
                                    <div>
                                        <p className="text-[16px] text-muted-foreground">
                                            Phone
                                        </p>
                                        <p className="text-[16px] font-medium">
                                            +91 1298493284
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