import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            {/* Main Layout */}
            <div className="flex min-h-screen">

                {/* Sidebar */}
                <aside className="w-57.5">
                    <Sidebar />
                </aside>

                {/* Content */}
                <main className="flex-1 section-padding">
                    {children}
                </main>

            </div>

            <Footer />
        </>
    );
}