import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Phone, PhoneOff } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
export default function Invoice({ data }: { data: any }) {
    const order = data?.order;
    let total = data?.orderItems.reduce(
        (acc: number, item: any) => acc + item.sale_price * item.quantity,
        0
    );
    if(order.reconciliation_type=="ADD"){
        total+=order.reconciliation_amount
    }else if (order.reconciliation_type == "DISCOUNT") {
        total -= order.reconciliation_amount;
    }

    let dfcl_comission = total * (order.dfcl_comission / 100);
    total += order.materials_cost;
    dfcl_comission += order.materials_cost * (15 / 100);
    let sp_amount = total - dfcl_comission;
    const hidden =
        new Date(order.process_date).getTime() + 15 * 24 * 60 * 60 * 1000 <
        new Date().getTime()
            ? true
            : false;

    return (
        <div className="w-full grid gap-6">
            <Card className="overflow-hidden">
                <CardHeader className="sr-only flex flex-row items-start ">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            Order Information
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-6 grid gap-6 text-sm">
                    <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <div className="text-lg font-bold">
                                    Customer Details
                                </div>

                                <div className="flex items-center gap-2">
                                    <dt className="text-muted-foreground">
                                        Customer:
                                    </dt>
                                    <dd>
                                        {hidden
                                            ? "Hidden"
                                            : order.customer_name}
                                    </dd>
                                </div>
                                <div className="flex items-center gap-2">
                                    <dt className="text-muted-foreground">
                                        Area:
                                    </dt>
                                    <dd>{`${order.area}, ${order.district}`}</dd>
                                </div>
                                <div className="flex items-center gap-2">
                                    <dt className="text-muted-foreground">
                                        Address:
                                    </dt>
                                    <dd>{hidden ? "Hidden" : order.address}</dd>
                                </div>
                                <div className="flex items-center gap-2">
                                    <dt className="text-muted-foreground">
                                        Phone:
                                    </dt>
                                    <dd>
                                        {hidden ? (
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="size-8"
                                                disabled
                                            >
                                                <PhoneOff className="size-4" />
                                            </Button>
                                        ) : (
                                            <Link
                                                href={`tel:${order.customer_phone}`}
                                                className="flex items-center gap-2 underline font-bold"
                                            >
                                                <Phone className="size-3" />
                                                {order.customer_phone}
                                            </Link>
                                        )}
                                    </dd>
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <div className="text-lg font-bold">Remarks</div>
                                <div className="flex items-start gap-2">
                                    <p className="">
                                        <span className="text-muted-foreground mr-2">
                                            Remarks:
                                        </span>
                                        {order.remarks ?? "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start justify-center">
                            <div className="grid gap-6">
                                <ul className="grid gap-3">
                                    <li className="text-lg font-bold">
                                        Resource Details
                                    </li>

                                    <li className="flex items-center gap-2">
                                        <span className="text-muted-foreground">
                                            Resource Name:
                                        </span>
                                        <span>{order.resource ?? "N/A"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-muted-foreground">
                                            Resource Phone:
                                        </span>
                                        <span>
                                            {order.resource_phone ?? "N/A"}
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-muted-foreground">
                                            SP ID:
                                        </span>
                                        <span>{order.sp_id}</span>
                                    </li>
                                    <li className="">
                                        <p className="flex gap-2">
                                            <span className="whitespace-nowrap text-muted-foreground">
                                                SP Name:
                                            </span>
                                            <span>{order.sp_name}</span>
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-muted-foreground">
                                            SP Area:
                                        </span>
                                        <span>
                                            {`${order.sp_thana}, ${order.sp_district}`}
                                        </span>
                                    </li>
                                </ul>
                                <div>
                                    <ul className="grid gap-3">
                                        <li className="text-lg font-bold">
                                            Created By
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-muted-foreground">
                                                Created By
                                            </span>
                                            <span>{order.created_by}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-muted-foreground">
                                                Completed By
                                            </span>
                                            <span>
                                                {order.completed_by ?? "N/A"}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/* <ul className="grid gap-3">
                            <Button size="sm" variant="outline" className="">
                            <Plus className="h-3.5 w-3.5 mr-2" />
                            Add Order Items
                            </Button>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg ">
                            Order Details
                        </CardTitle>
                        <CardDescription className="sr-only flex items-center gap-3">
                            Order Items
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <ul className="grid gap-3">
                            {data?.orderItems.map((item: any) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-muted-foreground">
                                        {item.service_name} x{" "}
                                        <span>{item.quantity}</span>
                                    </span>
                                    <span>
                                        {item.sale_price * item.quantity}
                                    </span>
                                </li>
                            ))}
                            {order.reconciliation_type == "ADD" && (
                                
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Additional Amount
                                        </span>
                                        <span>{order.reconciliation_amount}</span>
                                </li>
                            )}
                            {order.materials_cost >0 && (
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Materials {order.materials_detail? `(${order.materials_detail})`:""}
                                        </span>
                                        <span>{order.materials_cost}</span>
                                </li>
                            )}
                        </ul>
                        {/* <ul className="grid gap-3">
                            <Button size="sm" variant="outline" className="">
                                <Plus className="h-3.5 w-3.5 mr-2" />
                                Add Order Items
                            </Button>
                        </ul> */}
                        <Separator className="my-2" />
                        <ul className="ml-auto grid gap-3">
                            <li className="flex items-center justify-between gap-8">
                                <span className="text-muted-foreground">
                                    Subtotal
                                </span>
                                <span>{total}</span>
                            </li>
                            <li className="flex items-center justify-between gap-8">
                                <span className="text-muted-foreground">
                                    Discount
                                </span>
                                <span>{order.reconciliation_type=="DISCOUNT"?order.reconciliation_amount:0}</span>
                            </li>
                            <li className="flex items-center justify-between gap-8">
                                <span className="text-muted-foreground">
                                    Total Bill
                                </span>
                                <span>{total}</span>
                            </li>
                            <Separator className="my-2" />
                            <li className="flex items-center justify-between gap-8">
                                <span className="text-muted-foreground">
                                    DFCL Comission
                                </span>
                                <span>
                                    {dfcl_comission}
                                </span>
                            </li>
                            <li className="flex items-center justify-between font-semibold gap-8">
                                <span className="text-muted-foreground">
                                    Service Partner
                                </span>
                                <span>
                                    {sp_amount}
                                </span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
