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
        });
        const result = await response.json().then((data) => {
            setData(data);
        });
        // console.log(values);
    }

    if (data?.name) {
        router.push("/admin/controller");
        localStorage.setItem("access_token", data?.accToken);
        localStorage.setItem("refresh_token", data?.refreshTok);
    }
    if (data?.message) {
        return (
            <div className="flex justify-center items-center h-8 text-white">
                <h1>
                    Wrong password.{" "}
                    <a href={"/signin"} className="text-sky-400">
                        Try again
                    </a>{" "}
                    or click Forgot password to reset it.
                </h1>
            </div>
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
