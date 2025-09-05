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
import { Phone } from "lucide-react";
export default function Invoice({data}:{data:any}) {
    const order = data?.order;
    const total = data?.orderItems.reduce(
        (acc: number, item: any) => acc + item.sale_price * item.quantity,
        0
    );
    return (
        <div className="w-full grid lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-start ">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            Customer Information
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">
                                    Customer
                                </dt>
                                <dd>{order.customer_name}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">Area</dt>
                                <dd>{order.area}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">
                                    Address
                                </dt>
                                <dd>{order.address}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">Phone</dt>
                                <dd>
                                    <Link href={`tel:${order.customer_phone}`}>
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="h-6"
                                        >
                                            <Phone className="size-4 mr-2" />
                                            {order.customer_phone}
                                        </Button>
                                    </Link>
                                </dd>
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
                            Resource Name
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Created By
                                </span>
                                <span>{order.created_by}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Approved By
                                </span>
                                <span>{order.approved_by ?? "N/A"}</span>
                            </li>
                        </ul>
                        <Separator className="my-2" />
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
                        </ul>
                        {/* <ul className="grid gap-3">
                            <Button size="sm" variant="outline" className="">
                                <Plus className="h-3.5 w-3.5 mr-2" />
                                Add Order Items
                            </Button>
                        </ul> */}
                        <Separator className="my-2" />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Subtotal
                                </span>
                                <span>{total}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Discount
                                </span>
                                <span>0</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    DFCL Comission
                                </span>
                                <span>
                                    {total * (order.dfcl_comission / 100)}
                                </span>
                            </li>
                            <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">
                                    SP Total
                                </span>
                                <span>
                                    {total *
                                        ((100 - order.dfcl_comission) / 100)}
                                </span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
