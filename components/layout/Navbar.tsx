"use client"
import Image from "next/image"
import { Cross, Menu, PanelLeftClose, PanelLeftOpen, Settings, User, X, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

interface Props {
    collapsed: boolean
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ collapsed, setCollapsed }: Props) {
    return (
        <nav className="h-16 border-b bg-white px-6 flex items-center justify-between">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? (
                        <Menu className="h-5 w-5" />
                    ) : (
                        <XIcon className="h-5 w-5" />
                    )}
                </Button>

                <Image src="/images/AdminLogo.png" alt="Persistent Learning" width={140} height={40} priority />

            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-2">

                <span className="text-[16px]  text-black">
                    Welcome Admin!
                </span>

                {/* Profile Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback>
                                    <User className="h-5 w-5" />
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">

                        <div className="flex items-center gap-3 px-2 py-2">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-[#CE371F] text-white font-semibold">
                                    A
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col leading-tight">
                                <p className="text-[14px] font-medium">Alex Singh</p>
                                <span className="text-[12px] text-muted-foreground">Student</span>
                            </div>
                        </div>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href="/admin/profile"
                                className="flex items-center gap-2 text-black text-[14px]"
                            >
                                <User className="h-4 w-4" />
                                <span>View Profile</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center gap-2 text-black text-[14px]">
                            <Link href="/admin/settings" className="flex items-center gap-2 text-black text-[14px]">
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="text-[#CE371F] flex items-center gap-2 text-[14px]">
                            <Settings className="h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}