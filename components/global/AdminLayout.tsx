"use client"
import { useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import AdminSidebar from "../layout/Sidebar";


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <>
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Main Layout */}
            <div className="flex min-h-screen">
                <AdminSidebar collapsed={collapsed} />

                {/* Content */}
                <main className="flex-1 section-padding">
                    {children}
                </main>
            </div>

            <Footer />
        </>
    );
}