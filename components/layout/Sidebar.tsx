"use client"
import { useState } from "react";
import { Menu, X, LayoutDashboard, BookOpen, FileText, HelpCircle, User, Upload, ClipboardList, Bell, Headphones, Users, ShieldCheck, Ticket, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const mainItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Grade", icon: BookOpen },
  { label: "Post", icon: FileText },
  { label: "FAQs", icon: HelpCircle },
  { label: "Student Profile", icon: User },
  { label: "MCQ Upload", icon: Upload },
  { label: "Assessments", icon: ClipboardList },
  { label: "Notifications", icon: Bell },
  { label: "Support", icon: Headphones },
];

const adminItems = [
  { label: "Tutors", icon: Users },
  { label: "Users", icon: User },
  { label: "Audit Logs", icon: ShieldCheck },
  { label: "Coupons", icon: Ticket },
  { label: "Payment", icon: CreditCard },
];

export default function AdminSidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex">
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 rounded-xl bg-white p-2 shadow md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "h-screen w-64 bg-white border-r p-[20px] transition-transform duration-300",
          "fixed md:static z-40",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >

        {/* Main Menu */}
        <nav className="space-y-1 gap-10">
          {mainItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-[16px] transition font-semibold",
                  active === item.label
                    ? "bg-[#C1F1E4] text-black"
                    : ""
                )}
              >
                <Icon size={24} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Admin Section */}
        <div className="mt-6">
          <p className="mb-2 px-3 text-[16px] font-semibold text-black">
            Administration
          </p>
          <nav className="space-y-1 gap-10">
            {adminItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[16px] transition font-semibold",
                    active === item.label
                      ? "bg-[#C1F1E4] text-black"
                      : ""
                  )}
                >
                  <Icon size={24} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
