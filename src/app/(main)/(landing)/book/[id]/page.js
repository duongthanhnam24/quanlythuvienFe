"use client";

import { Button } from "@/components/ui/button";
import { getOrderUser } from "@/service/product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Book({ params }) {
    const [data, setData] = useState();

    useEffect(() => {
        const dataa = async (id) => {
            console.log(id, "hiiiii");
            const res = await getOrderUser(id);
            return setData(res);
        };
        dataa(params.id);
    }, []);
    const handleBook = async (idOrder, idProduct) => {
        console.log(idOrder, idProduct);
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/order/destroy-order`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idOrder, idProduct }),
        }).then((res) => res.json());
        if (data.message === "Không tìm thấy đơn hàng") {
            toast.error("Bạn trả sách không thành công", { theme: "dark", position: "top-center" });
        } else {
            toast.success("Bạn trả sách thành công!", { theme: "dark", position: "top-center" });
            window.location.reload();
        }
        return data;
    };
    return (
        <section>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto min-h-[500px]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Tên sách
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tác giả
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Thể loại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Thời gian mượn
                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3 ">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.orderItems?.map((item, i) => {
                        return (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-cyan-200 dark:hover:bg-gray-600 cursor-pointer "
                                key={i}
                            >
                                <td className="px-6 py-4">{i + 1}</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">{item.author}</td>

                                <td className="px-6 py-4">{item.type}</td>
                                <td className="px-6 py-4">{item.dateBorrow}</td>

                                <td className="py-4 ">
                                    <Button
                                        className="px-4 py-2 text-white rounded-xl bg-red-500"
                                        onClick={() => handleBook(data._id, item.product)}
                                    >
                                        {" "}
                                        Trả sách
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default Book;
