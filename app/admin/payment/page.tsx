"use client"
import AdminLayout from "@/components/global/AdminLayout";
import PaymentsPage from "./PaymentsPage";


function page() {
    return (
        <AdminLayout>
            <PaymentsPage />
        </AdminLayout>
    );
}

export default page;