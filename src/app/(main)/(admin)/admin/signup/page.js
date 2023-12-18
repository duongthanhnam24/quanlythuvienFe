"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
    const [user, setUser] = useState({
        name: null,
        msv: null,
        password: null,
        checkpassword: null,
        phone: null,
        class: null,
    });
    const [data, setData] = useState();

    function handleGetDataUser(e) {
        setUser((prevState) => ({
            ...prevState,
            [e.name]: e.value,
        }));
    }

    async function handleSubmit() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => res.json().then((res) => setData(res)));
        if (data?.message) {
            toast.error("Đăng ký không thành công", { theme: "dark", position: "top-center" });
        } else {
            toast.success("Bạn thêm sách thành công!", { theme: "dark", position: "top-center" });
            window.location.reload();
        }
    }

    return (
        <>
            <h1 className="p-5 text-5xl text-center">Tạo tài khoản cho sinh viên</h1>
            <div className="flex flex-col gap-4 p-4 border border-black rounded-md w-[500px] mx-auto my-[100px]">
                <label>Tên</label>
                <input
                    className="p-2 border border-black rounded-md"
                    placeholder="Tên"
                    name="name"
                    onChange={(e) => handleGetDataUser(e.target)}
                />
                <label>Mã sinh viên</label>
                <input
                    className="p-2 border border-black rounded-md"
                    placeholder="Mã sinh viên"
                    name="msv"
                    onChange={(e) => handleGetDataUser(e.target)}
                />
                <label>Mật Khẩu</label>
                <input
                    className="p-2 border border-black rounded-md"
                    placeholder="Mật Khẩu"
                    name="password"
                    onChange={(e) => handleGetDataUser(e.target)}
                />
                <label>Nhập lại mật khẩu</label>
                <input
                    className="p-2 border border-black rounded-md"
                    placeholder="Nhập lại mật khẩu"
                    name="checkpassword"
                    onChange={(e) => handleGetDataUser(e.target)}
                />
                <label>Lớp</label>
                <input
                    className="p-2 border border-black rounded-md"
                    placeholder="LỚP"
                    name="class"
                    onChange={(e) => handleGetDataUser(e.target)}
                />
                <label>Số điện thoại</label>
                <input
                    className="p-2 border border-black rounded-md"
                    placeholder="Số điện thoại"
                    name="phone"
                    onChange={(e) => handleGetDataUser(e.target)}
                />
                <Button onClick={() => handleSubmit()}>Đăng Ký</Button>
            </div>
        </>
    );
}

export default Signup;
