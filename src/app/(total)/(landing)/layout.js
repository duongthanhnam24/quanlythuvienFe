import "@/styles/globals.css";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="mx-[300px]">
                    <Header />
                    {children}
                </div>
                <Footer />
                <ToastContainer />
            </body>
        </html>
    );
}
