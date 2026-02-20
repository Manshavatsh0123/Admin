"use client"

import AdminLayout from "@/components/global/AdminLayout";
import { UserManagementPage } from "./UserManagementPage";

function page() {
    return (
        <AdminLayout>
            <UserManagementPage />
        </AdminLayout>
    );
}

export default page;