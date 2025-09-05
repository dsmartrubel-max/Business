import { PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { StatusFilter } from "./filter";

export type Order = {
    id: number;
    date: string;
    category: string;
    total: number;
    status: "pending" | "processing" | "success" | "failed";
    schedule: string;
};

const data: Order[] = [
    {
        id: 1010,
        date: "2021-10-10",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
    },
    {
        id: 1010,
        date: "2021-10-10",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
    },
    {
        id: 1010,
        date: "2021-10-10",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
    },
    {
        id: 1010,
        date: "2021-10-10",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
    },
];

export default function ResourceOrders() {
    return (
        <main className="grid flex-1 items-start gap-4 md:gap-4">
            <Card className="w-full overflow-x-hidden">
                <CardHeader className="flex flex-col md:flex-row gap-3 items-start justify-between">
                    <CardTitle>Orders</CardTitle>

                    <div className="ml-auto flex items-center gap-2">
                        <StatusFilter />
                        <Button size="sm" className=" gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Order
                            </span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table className="overflow-x-scroll">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Status</TableHead>

                                <TableHead>Total</TableHead>
                                <TableHead className="text-right">
                                    Schedule
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">
                                        {invoice.id}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {invoice.category}
                                    </TableCell>

                                    <TableCell className="">
                                        <Badge>{invoice.status}</Badge>
                                    </TableCell>
                                    <TableCell>{invoice.total}</TableCell>
                                    <TableCell className="text-right">
                                        {invoice.schedule}
                                    </TableCell>
                                    <TableCell>
                                        <Button size="sm">View</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex flex-col md:flex-row gap-3 items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                        Showing last 10 orders.
                    </div>
                </CardFooter>
            </Card>
        </main>
    );
}
