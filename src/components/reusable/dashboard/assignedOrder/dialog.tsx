"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    FixedDialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { acceptOrder, declineOrder } from "@/lib/actions/assignedOrder";

export default function AssignedOrderDialog({ data }: { data: any }) {
    const order = data.order;
    const [loading, setLoading] = useState("");
    const router = useRouter();
    const handleAccept = async () => {
        setLoading("Accepting...");
        try {
            await acceptOrder(order.id);
            document.getElementById("assignedOrderCloseButton")?.click();
            router.refresh()
        } catch (e) {
        }
        setLoading("");
    };
    const handleDecline = async () => {
        setLoading("Declining...");
        try {
            await declineOrder(order.id);
            document.getElementById("assignedOrderCloseButton")?.click();
            router.refresh();
        } catch (e) {
        }
        setLoading("");
    };
    return (
        <Dialog defaultOpen={true}>
            <DialogTrigger>
                <span className="sr-only">New Order</span>
            </DialogTrigger>
            <FixedDialogContent
                className="max-w-[400px] md:max-w-[425px]"
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
            >
                <DialogHeader>
                    <DialogTitle>You have a new order</DialogTitle>
                    <DialogDescription>
                        Accept or decline the order
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 text-sm">
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Area</dt>
                            <dd>{order.area}</dd>
                        </div>

                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Scheduled date
                            </dt>
                            <dd>{new Date(order.date).toDateString()}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Preferred Time
                            </dt>
                            <dd>{order.time}</dd>
                        </div>
                    </dl>
                    <Separator className="my-1" />
                    <ul className="grid gap-3">
                        {data?.items.map((item: any) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between"
                            >
                                <span className="text-muted-foreground">
                                    {item.service_name} x{" "}
                                    <span>{item.quantity}</span>
                                </span>
                                <span>{item.sale_price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-1" />
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Total Bill
                            </dt>
                            <dd>
                                {data?.items.reduce(
                                    (acc: number, item: any) =>
                                        acc + item.sale_price * item.quantity,
                                    0
                                )}
                            </dd>
                        </div>
                    </dl>
                </div>

                <DialogFooter className="gap-2">
                    <Button
                        variant="destructive"
                        className="w-full md:w-auto"
                        onClick={() => handleDecline()}
                        disabled={loading != ""}
                    >
                        {loading == "Declining..." ? "Declining..." : "Decline"}
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="w-full md:w-auto"
                        onClick={() => handleAccept()}
                        disabled={loading != ""}
                    >
                        {loading == "Accepting..." ? "Accepting..." : "Accept"}
                    </Button>
                    <DialogClose
                        asChild
                        className="hidden"
                        id="assignedOrderCloseButton"
                    >
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </FixedDialogContent>
        </Dialog>
    );
}
