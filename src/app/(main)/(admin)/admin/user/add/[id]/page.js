"use client";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

import { useState } from "react";
import { updateUser } from "@/service/user";
function MoreUser({ params }) {
    const [user, setUser] = useState({
        name: null,
        msv: null,
        password: null,
        checkpassword: null,
        phone: null,
        classs: null,
    });
    function handleInput(e) {
        setUser((prevState) => ({
            ...prevState,
            [e.name]: e.value,
        }));
    }
    async function handleSubmit() {
        const data = await updateUser(params.id, user);
        if (data.message === "succesfull") {
            toast.success("Sửa thành công", { theme: "dark", position: "top-center" });
            window.location.reload();
        } else {
            toast.error("Sửa không thành công", { theme: "dark", position: "top-center" });
        }
    }
    return (
        <section className=" h-screen">
            <div className="">
                <h1 className="flex items-center p-5 text-2xl ">Thêm Mới</h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>
            <form className="flex flex-col mx-10">
                <label className="mt-4 mb-2">Tên</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Tên"
                    name="name"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Mã sinh viên</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Mã sinh viên"
                    name="msv"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Lớp</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Lớp"
                    name="classs"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Password</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Nhập lại password</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Số lượng"
                    name="checkpassword"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">phone</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="phone"
                    name="phone"
                    onChange={(e) => handleInput(e.target)}
                />
                <Button
                    className="w-[100px] my-5"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Gửi
                </Button>
            </form>
        </section>
    );
}

export default MoreUser;
