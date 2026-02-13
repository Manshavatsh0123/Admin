import AdminLayout from "@/components/global/AdminLayout";
import AdminDashboard from "./AdminDashboard";


function page() {
    return (
        <AdminLayout>
            <AdminDashboard />
        </AdminLayout>
    );
}

export default page;