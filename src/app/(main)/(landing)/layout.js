import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {" "}
                <Header />
                {children}
                <ToastContainer />
            </body>
            <Footer />
        </html>
    );
}
