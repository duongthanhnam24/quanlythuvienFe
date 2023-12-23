"use client";

import Table from "@/components/table/table";
import Td from "@/components/td/td";
import Th from "@/components/th/th";
import Thead from "@/components/thead/thead";
import Tr from "@/components/tr/tr";
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
            <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto min-h-[500px]">
                <Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <Tr>
                        <Th scope="col" className="px-6 py-3 ">
                            Number
                        </Th>
                        <Th scope="col" className="px-6 py-3 ">
                            Tên sách
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Tác giả
                        </Th>

                        <Th scope="col" className="px-6 py-3">
                            Thể loại
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Thời gian mượn
                        </Th>
                        <Th scope="col" colSpan={2} className="px-6 py-3 ">
                            Action
                        </Th>
                    </Tr>
                </Thead>
                <tbody>
                    {data?.orderItems?.map((item, i) => {
                        return (
                            <Tr key={i}>
                                <Td>{i + 1}</Td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-1 text-center"
                                >
                                    {item.name}
                                </th>
                                <Td>{item.author}</Td>

                                <Td>{item.type}</Td>
                                <Td>{item.dateBorrow}</Td>

                                <Td className="py-4 ">
                                    <Button
                                        className="px-4 py-2 text-white rounded-xl bg-red-500"
                                        onClick={() => handleBook(data._id, item.product)}
                                    >
                                        {" "}
                                        Trả sách
                                    </Button>
                                </Td>
                            </Tr>
                        );
                    })}
                </tbody>
            </Table>
        </section>
    );
}

export default Book;
