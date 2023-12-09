import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { deleteSoft } from "@/service/product";
import { toast } from "react-toastify";

function DeleteBtn({ id }) {
    async function HandleDelete() {
        const data = await deleteSoft(id);
        if (data.message == "suscces") {
            toast.success("Bạn thêm sách thành công!", { theme: "dark", position: "top-center" });
            window.location.reload();
        } else {
            toast.error("Xóa không thành công", { theme: "dark", position: "top-center" });
        }
    }
    return (
        <Dialog>
            <DialogTrigger className="px-4 py-2 text-white rounded-xl bg-red-500">
                Delete
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Bạn có chắc chắn rằng muốn xóa không?</DialogTitle>
                    <DialogDescription className="p-4">
                        This action cannot be undone. This will permanently delete your account and
                        remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <section className=" space-x-6 flex justify-end">
                    <Button variant="destructive" onClick={() => HandleDelete()}>
                        Xóa
                    </Button>
                    <DialogClose asChild>
                        <Button variant="secondary">Hủy</Button>
                    </DialogClose>
                </section>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteBtn;
