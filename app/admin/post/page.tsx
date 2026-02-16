import AdminLayout from "@/components/global/AdminLayout";
import PostManagement from "./PostManagement";

function page() {
    return (
        <AdminLayout>
            <PostManagement />
        </AdminLayout>
    );
}

export default page;