"use client"

import Link from "next/link"
import { Bell, ChevronLeft, Lock } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import PageInfoBar from "@/components/global/PageInfoBar"
import { usePathname } from "next/navigation"
import AdminLayout from "@/components/global/AdminLayout"

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <AdminLayout>

            <PageInfoBar
                showBack={true}
                title="Settings"
                description="Manage your profile, preferences, and account settings"
            />

            {/* Layout */}
            <div className="grid md:grid-cols-[220px_1fr] gap-6 card-padding">

                <div className="rounded-xl border py-[20px]">
                    <CardContent className="p-3 space-y-2">

                        <Link href="/admin/settings">
                            <div
                                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-medium cursor-pointer mb-2 ${pathname === "/admin/settings" ? "bg-[#E1F8F2]" : "hover:bg-gray-100"}`}>
                                <Bell className="h-5 w-5" />
                                Notifications
                            </div>
                        </Link>

                        <Link href="/admin/settings/privacy-security">
                            <div className={`flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-medium cursor-pointer ${pathname === "/admin/settings/privacy-security" ? "bg-[#E1F8F2]" : "hover:bg-gray-100"}`}>
                                <Lock className="h-5 w-5" />
                                Privacy & Security
                            </div>
                        </Link>

                    </CardContent>
                </div>

                {/* Right Content */}
                <div className="rounded-xl border">
                    <CardContent className="p-6">
                        {children}
                    </CardContent>
                </div>

            </div>

        </AdminLayout>
    )
}