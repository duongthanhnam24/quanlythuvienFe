"use client";
import DeleteBtn from "@/components/dialog/delete";
import Pagination from "@/components/page/Pagination";
import Searchh from "@/components/search/search";
import { Button } from "@/components/ui/button";
import { deleteSoft, getAllProduct, searhProduct } from "@/service/product";
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
            `${process.env.NEXT_PUBLIC_API_APP_URL}/product/panigated/search${search}${filter} 1111`
        );
        const data = async () => {
            const result = await searhProduct(filter, searchFromPage);
            setBook(result);
        };
        data();
    }, [search, pageUi]);
    console.log(search);
    console.log(book);
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
                            Số lượng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Thể loại
                        </th>

                        <th scope="col" colSpan={2} className="px-6 py-3 ">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Products?.map((dataItem, i) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-cyan-200 dark:hover:bg-gray-600 cursor-pointer "
                            key={i}
                        >
                            <td className="px-6 py-4">{i + 1}</td>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                key={dataItem.name}
                            >
                                {dataItem.name}
                            </th>
                            <td className="px-6 py-4">{dataItem.author}</td>
                            <td className="px-6 py-4">{dataItem.slot}</td>

                            <td className="px-6 py-4">{dataItem.type}</td>

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
                                {/* <Button
                                    variant="none"
                                    className="px-4 py-2 text-white rounded-xl bg-red-500"
                                    onClick={() => deleteSoft(dataItem._id)}
                                >
                                    Delete
                                </Button> */}
                                <DeleteBtn id={dataItem._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
