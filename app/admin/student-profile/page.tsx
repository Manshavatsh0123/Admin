import AdminLayout from "@/components/global/AdminLayout";
import StudentProfilePage from "./StudentProfilePage";

function page() {
    return (
        <AdminLayout>
            <StudentProfilePage />
        </AdminLayout>
    );
}

export default page;