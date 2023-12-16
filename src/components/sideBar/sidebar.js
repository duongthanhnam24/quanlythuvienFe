"use client";
import { User } from "lucide-react";
import { DropdownMenuCheckboxes } from "../dropdown/dropdown";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
function SideBar() {
    const user = useSelector((state) => state.auth.user);

    return (
        <section className="px-4 h-screen w-1/4 bg-blue-400 text-white">
            <div className="">
                <h1 className="flex items-center p-5 text-2xl">
                    <User /> {user?.name}
                </h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>
            <Link href={"/landing"} className="m-4">
                Tới trang chính
            </Link>
            <DropdownMenuCheckboxes book />
            <DropdownMenuCheckboxes human />
            <Link href={"/"}>
                <Button
                    variant=""
                    className="w-full flex justify-between"
                    onClick={() => {
                        localStorage.clear();
                    }}
                >
                    Đăng Xuất
                    <LogOut />
                </Button>
            </Link>
        </section>
    );
}

export default SideBar;
