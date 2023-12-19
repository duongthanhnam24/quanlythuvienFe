"use client";

import { ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";
import { searhProduct } from "@/service/product";
import Pagination from "@/components/page/Pagination";
import Link from "next/link";
import Searchh from "@/components/search/search";
import LandingImg from "@/components/landing/langdingImg";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
function Landing() {
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
        <>
            <Header />
            <section className="">
                <LandingImg />
                <div className="my-2 bg-[#e2e2e2] p-4 flex justify-between" id="book">
                    <h2 className=" font-medium flex ">
                        <ClipboardList /> <span className="ml-3">Gía sách</span>
                    </h2>
                    <Searchh handleChange={setSearch} />
                </div>
                <div className="grid gird-row-4 grid-cols-4 gap-4 min-h-[700px]">
                    {!Products ? (
                        <section>....loading</section>
                    ) : (
                        Products.map((item, i) => {
                            return (
                                <Link href={`/landing/${item._id}`} key={i}>
                                    <div className="flex flex-col  items-center relative">
                                        <img
                                            src={item.image}
                                            className="w-[200px] h-[250px] object-cover"
                                        />
                                        <h4>{item.name}</h4>
                                        <p>{item.type}</p>

                                        <p>{item.author}</p>

                                        {item.slot <= 0 && (
                                            <div className="absolute top-[40%] left-[37%] items-center justify-center bg-red-500 px-2 py-1 rounded">
                                                <h1 className="text-white font-bold">Hết Hàng</h1>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })
                    )}
                </div>
                <Pagination
                    setPageUi={setPageUi}
                    pageUi={pageUi}
                    page={pages}
                    totalPage={totalPage}
                    countProducts={totalOb}
                />
            </section>
            <Footer />
        </>
    );
}

export default Landing;
