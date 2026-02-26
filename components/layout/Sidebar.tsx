"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  HelpCircle,
  BookOpen,
  User,
  Upload,
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

interface Props {
  collapsed: boolean
}

export default function AdminSidebar({ collapsed }: Props) {
  const pathname = usePathname()
  const [gradeOpen, setGradeOpen] = useState(
    pathname.startsWith("/admin/grade")
  )

  const items = [
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
    { label: "Tutors", icon: Users, href: "/admin/tutors" },
    { label: "Users", icon: User, href: "/admin/users" },
    { label: "Audit Logs", icon: ShieldCheck, href: "/admin/audit-logs" },
    { label: "Coupons", icon: Ticket, href: "/admin/coupons" },
    { label: "Payment", icon: CreditCard, href: "/admin/payment" },
  ]

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href
  }

  const isGradeActive = pathname.startsWith("/admin/grade")

  return (
    <aside
      className={cn(
        "h-screen bg-white border-r transition-all duration-300 overflow-y-auto",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-3 space-y-2">

        {/* MAIN ITEMS */}
        {items.map((item) => {
          const Icon = item.icon

          if (item.children) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => setGradeOpen(!gradeOpen)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-[16px] font-medium transition",
                    isGradeActive && "bg-[#C1F1E4]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-[24px] w-[24px] shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </div>

                  {!collapsed &&
                    (gradeOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    ))}
                </button>

                {!collapsed && gradeOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        <div
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm transition",
                            isActive(child.href)
                              ? "bg-[#C1F1E4]"
                              : "hover:bg-gray-100"
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

          return (
            <Link key={item.label} href={item.href!}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive(item.href)
                    ? "bg-[#C1F1E4]"
                    : "hover:bg-gray-100"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </div>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}