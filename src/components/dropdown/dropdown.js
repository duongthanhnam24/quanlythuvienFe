"use client";

import React, { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
export function DropdownMenuCheckboxes({ book, human }) {
    return (
        <section className="my-4 ">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="none" className=" w-full flex justify-between">
                        {(book && "Quản lý sách") || (human && "Quản lý người dùng")}{" "}
                        <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="text-center">Quản lý</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuCheckboxItem>
                        {book && <Link href={"/admin/morebook"}>Thêm sách Mới</Link>}
                        {human && <Link href={"/admin/signup"}>Thêm Người dùng</Link>}
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        <Link href={"/admin/controller"}> Quản lý sách </Link>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
}
