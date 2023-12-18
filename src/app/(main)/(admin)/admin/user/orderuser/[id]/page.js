"use client";
import { getOrderUser } from "@/service/product";
import Link from "next/link";
import { useEffect, useState } from "react";

function OrderUser({ params }) {
    const [data, setData] = useState();

    useEffect(() => {
        const dataa = async (id) => {
            console.log(id, "hiiiii");
            const res = await getOrderUser(id);
            return setData(res);
        };
        dataa(params.id);
    }, []);
    console.log(data);
    return (
        <section>
            <Link className="my-4 underline text-blue-300" href={"/admin/user"}>
                Quay lại
            </Link>

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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default OrderUser;
