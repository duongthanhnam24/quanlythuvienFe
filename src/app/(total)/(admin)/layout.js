import SideBar from "@/components/sideBar/sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function LandingLayout({ children }) {
    return (
        <section className="flex ">
            <SideBar />
            <div className="w-full">{children}</div>
            <ToastContainer />
        </section>
    );
}
