"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { AlignJustify, RefreshCcw, ArrowDownWideNarrow } from "lucide-react";
import { useState, useEffect } from "react";
import { notFound, useSearchParams } from "next/navigation";
import Pagination from "../page/Pagination";

function ListProduct({ param }) {
    const [valueRadio, setValueRadio] = useState({});
    const [data, setData] = useState();
    const [pageUi, setPageUi] = useState(1);
    const searchParams = useSearchParams();
    const search = searchParams.get("type");
    const { value, className } = valueRadio;
    const sort = value && className ? `&sort=${value}&sort=${className}` : "";
    const type = search ? `&type=${search}` : "";

    useEffect(() => {
        fetch(
            `${process.env.NEXT_PUBLIC_API_APP_URL}/product/all/product/${param}?page=${
                pageUi - 1
            }${sort}${type}`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, [valueRadio, pageUi, search, param, sort, type]);
    if (!data) {
        return (
            <div className="flex justify-center items-center w-full min-h-[300px]">
                <h1 className="text-3xl">
                    <RefreshCcw className="animate-spin" />
                </h1>
            </div>
        );
    }

    const { totalOb, pages, totalPage, Products } = data;
    if (data?.message === "sorry we dont found this page") {
        return notFound();
    }
    return (
        <div className="w-3/4 sm:w-screen">
            <div className="mt-[40px] mb-[20px] text-base flex space-x-7">
                <div className="flex sm:hidden">
                    <AlignJustify />
                    <span className="ml-2">Sắp xếp theo</span>
                </div>
                <div className="">
                    <form className="flex flex-row bg-[#f0eaea] space-x-4 sm:flex-col">
                        <div className="space-x-1 sm:ml-[16px]">
                            <input
                                type="radio"
                                className="_id"
                                id="default"
                                value="asc"
                                name="arrangement"
                                onChange={(e) =>
                                    setValueRadio({
                                        value: e.target.value,
                                        className: e.target.className,
                                    })
                                }
                            />
                            <label htmlFor="default">Default</label>
                        </div>
                        <div className="space-x-1">
                            <input
                                type="radio"
                                className="sale"
                                id="best"
                                value="desc"
                                name="arrangement"
                                onChange={(e) =>
                                    setValueRadio({
                                        value: e.target.value,
                                        className: e.target.className,
                                    })
                                }
                            />
                            <label htmlFor="best">Best</label>
                        </div>
                        <div className="space-x-1">
                            <input
                                type="radio"
                                className="price"
                                id="desc"
                                name="arrangement"
                                value="desc"
                                onChange={(e) => {
                                    setValueRadio({
                                        value: e.target.value,
                                        className: e.target.className,
                                    });
                                }}
                            />
                            <label htmlFor="desc">Price : Decrease</label>
                        </div>
                        <div className="space-x-1">
                            <input
                                type="radio"
                                className="price"
                                id="asc"
                                name="arrangement"
                                value="asc"
                                onChange={(e) => {
                                    setValueRadio({
                                        value: e.target.value,
                                        className: e.target.className,
                                    });
                                }}
                            />
                            <label htmlFor="asc">Price : Ascending</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="grid gird-row-3 grid-cols-3 gap-4 sm:px-2 sm:gap-2">
                {Products?.map((product) => {
                    return (
                        <Link href={`/${product.Ob}/${product._id}`}>
                            <div className=" wrapper ">
                                <img
                                    src={product.image[0].img}
                                    alt="..."
                                    className="w-[319px] h-[479px] rounded-xl box-sd img sm:w-[150px] sm:h-[200px]"
                                />
                                <div className="text-center ">
                                    <h2 className="m-3 text-gray-500 cursor-pointer text-base hover:text-black sm:text-xs">
                                        {product.name}
                                    </h2>
                                    <p className="mt-4 font-bold sm:text-xs">{product.price}</p>
                                </div>
                                <div className="middle">
                                    <Button className=" bg-[#6d3f0a]  text-white hover:bg-[#9b7e5e]">
                                        MORE
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <Pagination
                setPageUi={setPageUi}
                pageUi={pageUi}
                page={pages}
                totalPage={totalPage}
                countProducts={totalOb}
            />
        </div>
    );
}

export default ListProduct;
