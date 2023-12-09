"use client";
import Image from "next/image";

import giangsinh from "../../../../public/img/NOEL-01.png";
import thongbao1 from "@/../../public/img/thongbao1.png";
import thongbao2 from "@/../../public/img/thongbao2.png";
import thongbao3 from "@/../../public/img/thongbao3.png";
import thongbao4 from "@/../../public/img/thongbao4.png";
import { Search } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";
import { searhProduct } from "@/service/product";
import Pagination from "@/components/page/Pagination";
import Link from "next/link";
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
        <section className="">
            <Image src={giangsinh} className=" object-cover " />
            <div className="bg-[#005580] space-y-2 py-3 px-3 text-white">
                <h1 className="text-2xl font-bold">Thư viện trường đại học</h1>
                <p>Tìm kiếm sách, Giáo trình, Đề tài, NCKH, Tài liệu điện tử</p>
            </div>
            <div className="my-2 bg-[#e2e2e2] p-4" id="noti">
                <h2 className=" font-medium flex ">
                    <ClipboardList /> <span className="ml-3">Tin Mới Nhất</span>
                </h2>
            </div>
            <div className="flex space-x-3">
                <div className="">
                    <Image src={thongbao1} className=" object-cover w-[652px] h-[312px]" />
                </div>
                <div className="flex flex-col space-y-1">
                    <div className="flex space-x-4 text-xl text-justify  ">
                        <Image src={thongbao2} className="w-[218px] h-[101px] object-cover" />
                        <h3>Thư viện tiếp nhận 3 đầu sách từ Thầy Nguyễn Văn A</h3>
                    </div>
                    <div className="flex space-x-4 text-xl text-justify  ">
                        <Image src={thongbao3} className="w-[218px] h-[101px] object-cover" />
                        <h3>Nền tảng trực tuyến hỗ trợ nghiên cứu Europe PMC</h3>
                    </div>
                    <div className="flex space-x-4 text-xl text-justify  ">
                        <Image src={thongbao4} className="w-[218px] h-[101px] object-cover" />
                        <h3>Công cụ hỗ trợ nghiên cứu Semantic Scholar</h3>
                    </div>
                </div>
            </div>
            <div className="my-2 bg-[#e2e2e2] p-4 flex justify-between" id="book">
                <h2 className=" font-medium flex ">
                    <ClipboardList /> <span className="ml-3">Gía sách</span>
                </h2>
                <div className="flex   pl-2 rounded">
                    <label className="flex items-center">Tìm kiếm</label>
                    <input
                        className="border border-black p-2 py-1 rounded ml-4"
                        placeholder="Theo Tên, thể loại, tác giả, ..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="bg-black text-white px-4 py-2 rounded">
                        <Search />
                    </button>
                </div>
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
    );
}

export default Landing;
