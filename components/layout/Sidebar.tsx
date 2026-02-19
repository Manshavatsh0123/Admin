"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  FileText,
  HelpCircle,
  User,
  Upload,
  ClipboardList,
  Bell,
  Headphones,
  Users,
  ShieldCheck,
  Ticket,
  CreditCard,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

import { cn } from "@/lib/utils"

const mainItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },

  {
    label: "Grade",
    icon: BookOpen,
    children: [
      { label: "Subjects", href: "/admin/grade/subject" },
      { label: "Chapters", href: "/admin/grade/chapter" },
      { label: "Topics", href: "/admin/grade/topic" },
    ],
  },

  { label: "Post", icon: FileText, href: "/admin/post" },
  { label: "FAQs", icon: HelpCircle, href: "/admin/faqs" },
  { label: "Student Profile", icon: User, href: "/admin/student-profile" },
  { label: "MCQ Upload", icon: Upload, href: "/admin/mcq-upload" },
  { label: "Notifications", icon: Bell, href: "/admin/notifications" },
  { label: "Support", icon: Headphones, href: "/admin/support" },
]

const adminItems = [
  { label: "Tutors", icon: Users, href: "/admin/tutors" },
  { label: "Users", icon: User, href: "/admin/users" },
  { label: "Audit Logs", icon: ShieldCheck, href: "/admin/audit-logs" },
  { label: "Coupons", icon: Ticket, href: "/admin/coupons" },
  { label: "Payment", icon: CreditCard, href: "/admin/payment" },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const [sidebarOpen, setSidebarOpen] = useState(true)

  // auto open grade if inside grade route
  const [gradeOpen, setGradeOpen] = useState(
    pathname.startsWith("/admin/grade")
  )

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href
  }

  const isGradeActive = pathname.startsWith("/admin/grade")

  return (
    <div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 rounded-xl bg-white p-2 shadow md:hidden"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "h-screen bg-white p-[20px] transition-transform duration-300",
          "fixed md:static z-40",
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        )}
      >

        {/* MAIN MENU */}
        <nav className="space-y-1">

          {mainItems.map((item) => {
            const Icon = item.icon

            // GRADE DROPDOWN
            if (item.children) {
              return (
                <div key={item.label}>

                  {/* Parent */}
                  <button
                    onClick={() => setGradeOpen(!gradeOpen)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-[10px] px-2 py-2 text-[16px] font-medium transition",
                      isGradeActive && "bg-[#C1F1E4]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={22} strokeWidth={1.5} />
                      {item.label}
                    </div>

                    {gradeOpen ? (
                      <ChevronUp size={18} strokeWidth={1.5} />
                    ) : (
                      <ChevronDown size={18} strokeWidth={1.5} />
                    )}
                  </button>

                  {/* Children */}
                  {gradeOpen && (
                    <div className="ml-9 mt-1 space-y-1">

                      {item.children.map((child) => (

                        <Link key={child.label} href={child.href}>

                          <div
                            className={cn(
                              "rounded-[10px] px-3 py-2 text-[15px] font-medium cursor-pointer transition",
                              isActive(child.href)
                                ? "bg-[#C1F1E4]"
                                : "hover:bg-[#C1F1E4]"
                            )}
                          >
                            {child.label}
                          </div>

                        </Link>

                      ))}

                    </div>
                  )}

                </div>
              )
            }

            // NORMAL ITEM
            return (
              <Link key={item.label} href={item.href}>

                <div
                  className={cn(
                    "flex w-full items-center gap-3 rounded-[10px] px-2 py-2 text-[16px] font-medium cursor-pointer transition",
                    isActive(item.href)
                      ? "bg-[#C1F1E4]"
                      : "hover:bg-[#C1F1E4]"
                  )}
                >
                  <Icon size={22} strokeWidth={1.5} />
                  {item.label}
                </div>

              </Link>
            )
          })}

        </nav>

        {/* ADMIN SECTION */}
        <div className="mt-6">

          <p className="mb-2 px-3 text-[16px] font-semibold">
            Administration
          </p>

          <nav className="space-y-1">

            {adminItems.map((item) => {
              const Icon = item.icon

              return (
                <Link key={item.label} href={item.href}>

                  <div
                    className={cn(
                      "flex w-full items-center gap-3 rounded-[10px] px-2 py-2 text-[16px] font-medium cursor-pointer transition",
                      isActive(item.href)
                        ? "bg-[#C1F1E4]"
                        : "hover:bg-[#C1F1E4]"
                    )}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                    {item.label}
                  </div>

                </Link>
              )
            })}

          </nav>

        </div>

      </aside>

    </div>
  )
}
