"use client";
import "@/styles/globals.css";

import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        {children}

                        <ToastContainer />
                    </PersistGate>
                </Provider>
            </body>
        </html>
    );
}
