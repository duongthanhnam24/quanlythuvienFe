"use client";
import DeleteBtn from "@/components/dialog/delete";
import Pagination from "@/components/page/Pagination";
import Searchh from "@/components/search/search";
import Table from "@/components/table/table";
import Tb from "@/components/tb/tb";
import Td from "@/components/td/td";
import Th from "@/components/th/th";
import Thead from "@/components/thead/thead";
import Tr from "@/components/tr/tr";
import { searhProduct } from "@/service/product";
import Link from "next/link";
import { useEffect, useState } from "react";

function Controller() {
    const [pageUi, setPageUi] = useState(1);
    const [search, setSearch] = useState(null);
    const [book, setBook] = useState();
    useEffect(() => {
        const filter = search ? `&filter=${search}` : "";
        const searchFromPage = `?search=${pageUi - 1}`;
        console.log(
            `${process.env.NEXT_PUBLIC_API_APP_URL}/product/panigated/search${search}${filter}`
        );
        const data = async () => {
            const result = await searhProduct(filter, searchFromPage);
            setBook(result);
        };
        data();
    }, [search, pageUi]);
    if (!book) {
        return (
            <div className="flex justify-center items-center w-full min-h-[300px]">
                <h1 className="text-3xl">
                    <section>loading</section>
                </h1>
            </div>
        );
    }

    const { totalOb, pages, totalPage, Products } = book;
    return (
        <section className=" h-full">
            <div className="">
                <h1 className="flex items-center p-5 text-2xl ">Quản lý</h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>

            <Searchh handleChange={setSearch} />
            <Table>
                <Thead>
                    <Tr>
                        <Th>Number</Th>
                        <Th>Tên sách</Th>
                        <Th>Tác giả</Th>
                        <Th>Số lượng</Th>
                        <Th>Thể loại</Th>

                        <th scope="col" colSpan={2} className="px-6 py-3 ">
                            Action
                        </th>
                    </Tr>
                </Thead>
                <Tb>
                    {Products?.map((dataItem, i) => (
                        <Tr key={i}>
                            <Td>{i + 1}</Td>
                            <Th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                key={dataItem.name}
                            >
                                {dataItem.name}
                            </Th>
                            <Td>{dataItem.author}</Td>
                            <Td>{dataItem.slot}</Td>

                            <Td>{dataItem.type}</Td>

                            <td className="py-4 ">
                                <Link
                                    href={{
                                        pathname: `/admin/edit/${dataItem._id}`,
                                    }}
                                    className="px-4 py-2 text-white rounded-xl bg-blue-500
                                "
                                >
                                    Edit
                                </Link>
                            </td>
                            <td className="py-4 ">
                                <DeleteBtn id={dataItem._id} />
                            </td>
                        </Tr>
                    ))}
                </Tb>
            </Table>
            <Pagination
                setPageUi={setPageUi}
                pageUi={pageUi}
                page={pages}
                totalPage={totalPage}
                countProducts={totalOb}
            />
        </section>
    );
}

export default Controller;
