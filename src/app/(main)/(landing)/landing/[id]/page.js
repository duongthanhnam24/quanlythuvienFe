"use client";
import { Button } from "@/components/ui/button";
import { createOrder, getProduct } from "@/service/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ObectBook({ params }) {
    const user = useSelector((state) => state.auth.user);
    var currentDate = new Date();

    // Sử dụng các phương thức của đối tượng Date để lấy thông tin và format theo ý muốn
    var formattedDateTime = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
    }/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    console.log(formattedDateTime);
    const [item, setItem] = useState();
    const [notification, setNotification] = useState();
    useEffect(() => {
        const data = async () => {
            const data = await getProduct(params.id);
            return setItem(data);
        };
        data();
    }, []);

    async function muon() {
        const data = await createOrder(user._id, item, formattedDateTime);
        setNotification(data);
        if (
            data.message === "Số lượng sách đã hết" ||
            data.message === "bạn đã bị phạt không thể mượn sách"
        ) {
            toast.error(data.message, { theme: "dark", position: "top-center" });
        } else {
            toast.success("Mượn thành công", { theme: "dark", position: "top-center" });
            // window.location.reload();
        }
    }

    return (
        <section className=" m-4 min-h-[700px]">
            <div className="my-4">
                <Link href={"/"} className="text-blue-600 underline">
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
                <Button onClick={() => muon()}>Mượn Sách</Button>
            </div>
        </section>
    );
}

export default ObectBook;
