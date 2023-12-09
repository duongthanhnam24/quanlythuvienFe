"use client";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/service/product";
import Link from "next/link";
import { useEffect, useState } from "react";

function ObectBook({ params }) {
    const [item, setItem] = useState();
    useEffect(() => {
        const data = async () => {
            const data = await getProduct(params.id);
            return setItem(data);
        };
        data();
    }, []);
    return (
        <section className=" m-4 min-h-[700px]">
            <div className="my-4">
                <Link href={"/landing"} className="text-blue-600 underline">
                    Quay lại
                </Link>
            </div>
            <div className="flex  space-x-10">
                <img src={item?.image} className="w-[200px] h-[300px] object-cover" />
                <div className=" space-y-5">
                    <h1 className="text-2xl font-bold">{item?.name}</h1>
                    <p className="text-xl font-light">Tác giả : {item?.author}</p>
                    <p className="text-xl font-light">Thể Loại : {item?.type}</p>
                    <p>Số lượng còn để mượn : {item?.slot}</p>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-10">
                <Button>Mượn Sách</Button>
                <Button>Thêm vào ưa thích</Button>
            </div>
        </section>
    );
}

export default ObectBook;
