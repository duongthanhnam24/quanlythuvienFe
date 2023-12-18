"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSelector } from "react-redux";

function UserInfor() {
    const user = useSelector((state) => state.auth.user);

    return (
        <section>
            <h1 className="py-4 text-3xl">Thông tin user</h1>
            <section className="w-[300px]">
                <label>Tên</label>
                <Input placeholder="tên" value={user?.name} />
                <label>Mã sinh viên</label>
                <Input placeholder="mã sinh viên" value={user?.msv} />
                <label>Phone</label>
                <Input placeholder="số điện thọai" value={user?.phoneNumber} />
                <label>Tình trạng phạt</label>
                <p>{user?.punish ? "đã bị phạt" : "chưa bị phạt"}</p>
            </section>
        </section>
    );
}

export default UserInfor;
