"use client";
import DeleteBtn from "@/components/dialog/delete";
import Searchh from "@/components/search/search";
import { Button } from "@/components/ui/button";
import { GetAllUser, Punish } from "@/service/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UserController() {
    const [user, setUser] = useState();
    const [search, setSearch] = useState(null);
    useEffect(() => {
        const searchs = search ? `?search=${search}` : "";
        const data = async () => {
            const res = await GetAllUser(searchs);
            return setUser(res);
        };
        data();
    }, [search]);
    async function punish(id, key) {
        const data = await Punish(id, key);
        if (data.message === " successfully.") {
            toast.success(" thành công", { theme: "dark", position: "top-center" });
            window.location.reload();
        } else {
            toast.error("không thành công", { theme: "dark", position: "top-center" });
        }
        return data;
    }
    return (
        <section className=" h-full">
            <div className="">
                <h1 className="flex items-center p-5 text-2xl ">Quản lý Người Dùng</h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>

            <Searchh handleChange={setSearch} />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto min-h-[500px]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Tên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mã sinh viên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số điện thoại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lớp
                        </th>
                        <th scope="col" className="px-6 py-3">
                            tình trạng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số sách mượn
                        </th>

                        <th scope="col" className="px-6 py-3 ">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((item, i) => {
                        return (
                            <tr>
                                <td className="px-6 py-4">{i + 1}</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">{item.msv}</td>

                                <td className="px-6 py-4">{item.phoneNumber}</td>
                                <td className="px-6 py-4">{item.class}</td>
                                <td className="px-6 py-4">
                                    {" "}
                                    {item.punish ? "đã phạt" : "chưa bị phạt"}{" "}
                                </td>
                                <td className="py-4 ">
                                    <Link
                                        href={`/admin/user/orderuser/${item._id}`}
                                        className="px-4 py-2 text-white rounded-xl bg-blue-500
                                "
                                    >
                                        View
                                    </Link>
                                </td>
                                <td className="py-4 space-x-2">
                                    <Button
                                        className="px-4 py-2 text-white rounded-xl bg-green-500"
                                        onClick={() => punish(item._id, false)}
                                    >
                                        {" "}
                                        Gỡ phạt
                                    </Button>
                                    <Button
                                        className="px-4 py-2 text-white rounded-xl bg-red-500"
                                        onClick={() => punish(item._id, true)}
                                    >
                                        Phạt
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* <Pagination
                setPageUi={setPageUi}
                pageUi={pageUi}
                page={page}
                totalPage={totalPage}
                countProducts={countProducts}
            /> */}
        </section>
    );
}

export default UserController;
