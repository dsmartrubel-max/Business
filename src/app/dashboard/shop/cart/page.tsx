import Image from "next/image";
import { ChevronLeft, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cart() {
    return (
        <div className="w-full max-w-6xl mx-auto grid gap-6">
            <div className="flex items-center justify-between">
                <Link href="/dashboard/shop">
                    <Button size="sm" className="h-9 flex items-center gap-2">
                        <ChevronLeft className="size-4" />
                        Back to Shop
                    </Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Shopping Cart</CardTitle>
                </CardHeader>
                <CardContent className="p-2 md:p-4">
                    <Table className="text-xs md:text-sm">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="text-center hidden md:table-cell">
                                    Price
                                </TableHead>
                                <TableHead className="text-center">
                                    Quantity
                                </TableHead>
                                <TableHead className="text-center">
                                    Total
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="hidden sm:table-cell">
                                    <Image
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    DFCL T-Shirt
                                </TableCell>

                                <TableCell className="hidden md:table-cell text-center">
                                    &#2547;525
                                </TableCell>
                                <TableCell className="text-center">1</TableCell>
                                <TableCell className="text-center">
                                    &#2547;525
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-6 border-t">
                    <div>
                        <span className="font-medium">Total:</span>{" "}
                        <span className="font-semibold">&#2547;525</span>
                    </div>
                    <Link href="/dashboard/shop/checkout">
                        <Button>Checkout</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
