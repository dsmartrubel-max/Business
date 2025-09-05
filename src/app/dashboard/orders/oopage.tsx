"use client";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function OrderList() {
    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-4xl font-cal">My Orders</h1>
            <div className="flex items-center justify-between">
                <div></div>
                <div>
                    <StatusSeletor />
                </div>
            </div>
            <OrderTable />
            <div className="w-full flex items-end">
                <TablePagination />
            </div>
        </div>
    );
}

import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function StatusSeletor() {
    return (
        <Select>
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

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

export function OrderTable() {
    return (
        <Table className="rounded-md border">
            <TableCaption>A list of your recent orders.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>

                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Schedule</TableHead>
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
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export function TablePagination() {
    return (
        <Pagination className="flex items-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
