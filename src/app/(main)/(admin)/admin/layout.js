import SideBar from "@/components/sideBar/sidebar";

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <section className="flex">
                    <SideBar />
                    <div className="w-full">{children}</div>
                </section>
            </body>
        </html>
    );
}
