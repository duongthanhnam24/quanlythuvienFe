"use client";
import { Button } from "@/components/ui/button";
import { createProduct, getProduct, updateProduct } from "@/service/product";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
function Edit({ params }) {
    const id = params.id;
    const [newBook, setNewBook] = useState({
        name: null,
        image: null,
        type: null,
        author: null,
        slot: null,
    });
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/${id}`);
                const jsonData = await res.json();
                setNewBook({
                    name: jsonData.name,
                    image: jsonData.image,
                    type: jsonData.type,
                    author: jsonData.author,
                    slot: jsonData.slot,
                }); // Update the state with the fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(id); // Call the function with the provided ID
    }, [id]);

    function handleInput(e) {
        setNewBook((prevState) => ({
            ...prevState,
            [e.name]: e.value,
        }));
    }
    console.log(newBook);
    async function handleSubmit(id) {
        const data = await updateProduct(id, newBook);
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
                <h1 className="flex items-center p-5 text-2xl ">Sửa {newBook.name}</h1>
            </div>
            <div className=" border-solid border-b mb-4"></div>
            <form className="flex flex-col mx-10">
                <label className="mt-4 mb-2">Tên sách</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Tên sách"
                    value={newBook.name}
                    name="name"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Tác giả</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Tác giả"
                    value={newBook.author}
                    name="author"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Đường dẫn hình ảnh</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Đường dẫn hình ảnh"
                    value={newBook.image}
                    name="image"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Thể loại</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Thể loại"
                    value={newBook.type}
                    name="type"
                    onChange={(e) => handleInput(e.target)}
                />
                <label className="mt-4 mb-2">Số lượng</label>
                <input
                    className="p-2 border border-black rounded-md w-[500px]"
                    placeholder="Số lượng"
                    value={newBook.slot}
                    name="slot"
                    onChange={(e) => handleInput(e.target)}
                />
                <Button
                    className="w-[100px] my-5"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(id);
                    }}
                >
                    Sửa
                </Button>
            </form>
        </section>
    );
}

export default Edit;
