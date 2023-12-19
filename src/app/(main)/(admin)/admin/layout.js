import SideBar from "@/components/sideBar/sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <section className="flex">
                    <SideBar />
                    <div className="w-full">{children}</div>
                    <ToastContainer />
                </section>
            </body>
        </html>
    );
}
