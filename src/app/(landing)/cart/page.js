"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeOrder, increasing, decrease } from "@/redux/features/counter/orderSlice";

function Cart() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);

    const changeNumber = (type, id) => {
        switch (type) {
            case "decrease":
                return dispatch(decrease({ productId: id }));
            case "increasing":
                return dispatch(increasing({ productId: id }));
            default:
                break;
        }
    };
    return (
        <div className="container min-h-[1000px]">
            <h1 className="py-6 text-[14px] uppercase">
                <Link href={"/"}>TRANG CHỦ</Link> / Giỏ Hàng Của Bạn - DCB24th
            </h1>
            <div className="py-[50px] ">
                <h1 className="text-3xl font-bold">Giỏ Hàng</h1>
                <table className="w-full text-sm text-left  dark:text-gray-400 table-auto ">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 ">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Price
                            </th>

                            <th scope="col" className="px-6 py-3 ">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.orderItems.map((item) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600 cursor-pointer my-2"
                                key={item.product}
                            >
                                <td className="px-6 py-4" key={item.product}>
                                    <img
                                        src={item.image}
                                        width={160}
                                        height={240}
                                        alt="product"
                                        className=" rounded-sm"
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-base">{item.name}</td>
                                <td className="px-6 py-4">{item.price}</td>
                                <td className="px-6 py-4">
                                    <p className="flex space-x-3">
                                        <Minus
                                            onClick={() => changeNumber("decrease", item.product)}
                                        />{" "}
                                        <span className="text-blue-700">{item.amount}</span>{" "}
                                        <Plus
                                            onClick={() => changeNumber("increasing", item.product)}
                                        />
                                    </p>
                                </td>

                                <td className="px-6 py-4">{item.price * item.amount}</td>
                                <td className="px-6 py-4">
                                    <Button
                                        variant="none"
                                        onClick={() =>
                                            dispatch(removeOrder({ productId: item.product }))
                                        }
                                    >
                                        <Trash2 className="text-red-500" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Button
                    variant="none"
                    className="float-right  h-12 bg-[#6d3f0a] text-white hover:bg-[#9b7e5e]"
                >
                    Thanh Toán
                </Button>
            </div>
        </div>
    );
}

export default Cart;