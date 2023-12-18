import { ClipboardList } from "lucide-react";

import giangsinh from "../../../public/img/NOEL-01.png";
import thongbao2 from "@../../public/img/thongbao2.png";
import thongbao1 from "@../../public/img/thongbao1.png";

import thongbao3 from "@../../public/img/thongbao3.png";
import thongbao4 from "@../../public/img/thongbao4.png";
import Image from "next/image";
function LandingImg() {
    return (
        <>
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
        </>
    );
}

export default LandingImg;
