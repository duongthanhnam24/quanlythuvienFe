"use client";
import DeleteBtn from "@/components/dialog/delete";
import Searchh from "@/components/search/search";
import Table from "@/components/table/table";
import Tb from "@/components/tb/tb";
import Td from "@/components/td/td";
import Th from "@/components/th/th";
import Thead from "@/components/thead/thead";
import Tr from "@/components/tr/tr";
import { Button } from "@/components/ui/button";
import { GetAllUser, Punish, deletes } from "@/service/user";
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
    async function destroy(id) {
        const datas = await deletes(id);
        console.log(datas);
        if (datas.message == "successful") {
            toast.success(" thành công", { theme: "dark", position: "top-center" });
            window.location.reload();
        } else {
            toast.error("không thành công", { theme: "dark", position: "top-center" });
        }
    }
    return (
        <section className=" h-full">
            <div className="">
                <h1 className="flex items-center p-5 text-2xl ">Quản lý Người Dùng</h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>

            <Searchh handleChange={setSearch} />
            <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto min-h-[500px]">
                <Thead>
                    <Tr>
                        <Th scope="col" className="px-6 py-3 ">
                            Number
                        </Th>
                        <Th scope="col" className="px-6 py-3 ">
                            Tên
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Mã sinh viên
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Số điện thoại
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Lớp
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            tình trạng
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Số sách mượn
                        </Th>

                        <Th scope="col" className="px-6 py-3 ">
                            Action
                        </Th>
                    </Tr>
                </Thead>
                <Tb>
                    {user?.map((item, i) => {
                        return (
                            <Tr>
                                <Td className="px-6 py-4">{i + 1}</Td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <Td className="px-6 py-4">{item.msv}</Td>

                                <Td className="px-6 py-4">{item.phoneNumber}</Td>
                                <Td className="px-6 py-4">{item.class}</Td>
                                <Td className="px-6 py-4">
                                    {" "}
                                    {item.punish ? "đã phạt" : "chưa bị phạt"}{" "}
                                </Td>
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
                                    <Button className="px-4 py-2 text-white rounded-xl bg-blue-500">
                                        {" "}
                                        <Link href={`/admin/user/add/${item._id}`}>Sửa</Link>
                                    </Button>
                                    <Button
                                        className="px-4 py-2 text-white rounded-xl bg-red-500"
                                        onClick={() => destroy(item._id)}
                                    >
                                        Xóa
                                    </Button>
                                </td>
                            </Tr>
                        );
                    })}
                </Tb>
            </Table>
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
