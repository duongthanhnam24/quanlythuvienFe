"use client";
import { Button } from "@/components/ui/button";
import { createProduct } from "@/service/product";
import { toast } from "react-toastify";

import { useState } from "react";
function Admin() {
    const [newBook, setNewBook] = useState({
        name: null,
        image: null,
        type: null,
        author: null,
        slot: null,
        position: null,
    });
    function handleInput(e) {
        setNewBook((prevState) => ({
            ...prevState,
            [e.name]: e.value,
        }));
    }
    async function handleSubmit() {
        const data = await createProduct(newBook);
        if (data.message === "missing something ?") {
            toast.error("Bạn quên điền thứ gì đó", { theme: "dark", position: "top-center" });
        } else {
            toast.success("Bạn thêm sách thành công!", { theme: "dark", position: "top-center" });
            window.location.reload();
        }
    }
    return (
        <section className=" h-screen">
            <div className="">
                <h1 className="flex items-center p-5 text-2xl ">Thêm Mới</h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>
            <form className="flex flex-col mx-10">
                <label className="mt-4 mb-2">Tên sách</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Tên sách"
                    name="name"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Tác giả</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Tác giả"
                    name="author"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Đường dẫn hình ảnh</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Đường dẫn hình ảnh"
                    name="image"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Thể loại</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Thể loại"
                    name="type"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Số lượng</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Số lượng"
                    name="slot"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Vị trí</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Vị trí"
                    name="position"
                    onChange={(e) => handleInput(e.target)}
                />
                <Button
                    className="w-[100px] my-5"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Gửi
                </Button>
            </form>
        </section>
    );
}

export default Admin;
