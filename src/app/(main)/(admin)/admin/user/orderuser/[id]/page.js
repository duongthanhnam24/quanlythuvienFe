"use client";
import Table from "@/components/table/table";
import Tb from "@/components/tb/tb";
import Td from "@/components/td/td";
import Th from "@/components/th/th";
import Thead from "@/components/thead/thead";
import Tr from "@/components/tr/tr";
import { getOrderUser } from "@/service/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
function OrderUser({ params }) {
    const [data, setData] = useState();

    useEffect(() => {
        const socket = io("http://localhost:5000");
        const dataa = async (id) => {
            const res = await getOrderUser(id);
            return setData(res);
        };
        socket.on("order", (data) => {
            setData(data);
        });
        dataa(params.id);
    }, []);

    return (
        <section>
            <Link className="my-4 underline text-blue-300" href={"/admin/user"}>
                Quay lại
            </Link>

            <Table>
                <Thead>
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
                    </Tr>
                </Thead>
                <Tb>
                    {data?.orderItems?.map((item, i) => {
                        return (
                            <Tr key={i}>
                                <Td className="px-6 py-4">{i + 1}</Td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <Td className="px-6 py-4">{item.author}</Td>

                                <Td className="px-6 py-4">{item.type}</Td>
                                <Td className="px-6 py-4">{item.dateBorrow}</Td>
                            </Tr>
                        );
                    })}
                </Tb>
            </Table>
        </section>
    );
}

export default OrderUser;
