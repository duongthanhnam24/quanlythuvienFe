"use client";
import { BookOpenCheck, FolderCog, LogOut, User, UserCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
    const user = useSelector((state) => state.auth.user);
    return (
        <section className="flex justify-between h-[50px] p-4 items-center">
            <h1 className="text-3xl font-bold">Thư Viện</h1>
            <a href="#noti">Bảng tin</a>
            <a href="#book">Kho sách</a>
            <a>Thông tin thư viện</a>
            <div className="group">
                <Button variant="none" className="flex items-center space-x-2 relative">
                    <UserCircle2 />
                    <span className="text-base font-semibold sm:hidden md:hidden">
                        {user?.name}
                    </span>
                </Button>
                <div className="absolute bg-white top-[5%] sm:left-[40%] md:left-[73%] rounded-md box-shad shadow-lg shadow-indigo-500/40 hidden group-hover:block animate-fade-up animate-once animate-duration-[600ms]">
                    <Button variant="none" className="py-[15px] px-[20px] flex space-x-2">
                        <User />
                        <Link href={"/profile"}>Thông tin tài khoản</Link>
                    </Button>
                    <Button variant="none" className="py-[15px] px-[20px] flex space-x-2">
                        <FolderCog />
                        <Link href={"/admin/controller"}>Quản lý </Link>
                    </Button>
                    <Button variant="none" className="py-[15px] px-[20px] flex space-x-2">
                        <LogOut />
                        <a href={"/"} onClick={() => clearToken()}>
                            Đăng xuất
                        </a>
                    </Button>
                </div>
            </div>
            <Link href={"/"}>
                <BookOpenCheck />
            </Link>
        </section>
    );
}

export default Header;
