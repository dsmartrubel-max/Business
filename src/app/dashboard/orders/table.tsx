import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { LoadingCircle } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, PhoneOff } from "lucide-react";
export default function OrderTable({
    loading,
    orders,
}: {
    loading: any;
    orders: any[];
}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Resource</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-xs md:text-sm">
                {loading ? (
                    <TableRow>
                        <TableCell colSpan={8} className="text-center">
                            <span className="w-full flex items-center justify-center gap-2">
                                <LoadingCircle />
                                Loading
                            </span>
                        </TableCell>
                    </TableRow>
                ) : orders.length > 0 ? (
                    orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">
                                {order.id}
                            </TableCell>
                            <TableCell className="whitespace-nowrap flex items-center gap-2">
                                {/* if order.process_date exists and it is not within last 15 days, "N/A" will be shown */}
                                {order.process_date &&
                                new Date(order.process_date).getTime() +
                                    15 * 24 * 60 * 60 * 1000 <
                                    new Date().getTime() ? (
                                    <>
                                        Hidden
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="size-8"
                                            disabled
                                        >
                                            <PhoneOff className="size-4" />
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        {order.customer_name}
                                        {order.customer_phone && (
                                            <Link
                                                href={`tel:${order.customer_phone}`}
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="size-8"
                                                >
                                                    <Phone className="size-4" />
                                                </Button>
                                            </Link>
                                        )}
                                    </>
                                )}
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                                {order.location ?? ""}
                            </TableCell>
                            <TableCell className="whitespace-nowrap font-medium">
                                {order.subcategory ?? "N/A"}
                            </TableCell>

                            <TableCell className="whitespace-nowrap">
                                {`${new Date(
                                    order.prefered_date
                                ).toDateString()}
                                (${order.prefered_time})`}
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                                {JSON.parse(order.service_price).reduce(
                                    (
                                        total: string,
                                        price: string,
                                        index: number
                                    ) =>
                                        parseInt(total) +
                                        parseInt(price) *
                                            JSON.parse(order.service_quantity)[
                                                index
                                            ],
                                    0
                                ) +
                                    (order.reconciliation_type === "ADD"
                                        ? parseInt(order.reconciliation_amount)
                                        : -parseInt(
                                              order.reconciliation_amount
                                          )) +
                                    order.materials_cost}
                            </TableCell>
                            <TableCell className="whitespace-nowrap flex items-center gap-2">
                                {order.resource}
                                {order.resource_phone && (
                                    <Link href={`tel:${order.resource_phone}`}>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="size-8"
                                        >
                                            <Phone className="size-4" />
                                        </Button>
                                    </Link>
                                )}
                            </TableCell>

                            <TableCell className="capitalize">
                                <Badge>{order.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <Link href={`/dashboard/orders/${order.id}`}>
                                    <Button size="sm">Details</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={8} className="text-center">
                            No orders found
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
