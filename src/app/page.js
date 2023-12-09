import React, { Suspense } from "react";
import header from "../../public/img/sliderHeader.png";
import Image from "next/image";
import FormSignUp from "@/components/signup/form";

export default function Counter() {
    return (
        <>
            <div className="relative bg-black">
                <Image
                    src={header}
                    alt="slider"
                    className="w-full h-[200px] object-cover opacity-[0.6]  "
                />
                <div className=" absolute top-[37%] text-center left-[37%] text-white  ">
                    <h1 className="text-3xl">TRANG WEB QUẢN LÝ THƯ VIỆN TRƯỜNG HỌC</h1>
                    <p className="text-xl">
                        Hỗ trợ quản lý thư viện và xây dựng hệ thống thư viện điện tử
                    </p>
                </div>
            </div>
            <div className="my-10">
                <h2 className="text-center text-3xl font-bold py-4">Đăng nhập</h2>
                <div className=" border border-solid border-b "></div>
                <FormSignUp />
            </div>
        </>
    );
}
