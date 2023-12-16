"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function FormSignUp() {
    const [data, setData] = useState({});
    const [valueSubmit, setValueSubmit] = useState({ msv: "", password: "" });
    // const dispatch = useDispatch();
    const router = useRouter();
    // const pathname = usePathname();

    function handleValue(e) {
        setValueSubmit((prevState) => ({
            ...prevState,
            [e.name]: e.value,
        }));
    }

    async function onSubmit(valueSubmit) {
        console.log(valueSubmit);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(valueSubmit),
        }).then((res) => res.json());
        setData(response);
        if (response.isAdmin) {
            router.push("/admin/controller");
            localStorage.setItem("access_token", response.accToken);
            localStorage.setItem("refresh_token", response.refreshTok);
        } else if (!response.isAdmin && !response.message) {
            router.push("/landing");
            localStorage.setItem("access_token", response.accToken);
            localStorage.setItem("refresh_token", response.refreshTok);
        }
    }
    if (data?.message) {
        return (
            <h1 className="text-center">
                Wrong password.{" "}
                <a href={"/"} className="text-sky-400 ">
                    Try again
                </a>{" "}
            </h1>
        );
    }
    return (
        <div className="flex flex-col gap-4 p-4 border border-black rounded-md w-[500px] mx-auto my-4">
            <label>Mã sinh viên</label>
            <input
                className="p-2 border border-black rounded-md"
                placeholder="Mã sinh viên"
                name="msv"
                onChange={(e) => handleValue(e.target)}
            />
            <label>Mật Khẩu</label>
            <input
                className="p-2 border border-black rounded-md"
                placeholder="Mật Khẩu"
                name="password"
                type="password"
                onChange={(e) => handleValue(e.target)}
            />
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    onSubmit(valueSubmit);
                }}
            >
                Đăng Nhập
            </Button>
        </div>
    );
}

export default FormSignUp;
