"use client"
import AdminLayout from "@/components/global/AdminLayout";
import CouponManagementPage from "./CouponManagementPage";

function page() {
    return (
        <AdminLayout>
            <CouponManagementPage />
        </AdminLayout>
    );
}

export default page;