"use client";
import Link from "next/link";
import { Phone, PlusCircle, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import PaginationComponent from "./pagination";
import { StatusFilter } from "./filter";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { LoadingCircle } from "@/components/icons";
import { useSearchParams } from "next/navigation";
import OrderTable from "./table";
import { getOrders } from "@/lib/actions/order";

export type Order = {
    id: number;
    date: string;
    time: string;
    category: string;
    total: number;
    status: "pending" | "processing" | "success" | "failed";
    schedule: string;
    resource: {
        name: string;
        phone: string;
    };
    location: string;
};

const data: Order[] = [
    {
        id: 1010,
        date: "2021-10-10",
        time: "9:00-10:00 AM",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
        location: "Bashabo",
        resource: { name: "Suhag Mia", phone: "01700000000" },
    },
    {
        id: 1010,
        date: "2021-10-10",
        time: "9:00-10:00 AM",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
        location: "Bashabo",
        resource: { name: "Suhag Mia", phone: "01700000000" },
    },
    {
        id: 1010,
        date: "2021-10-10",
        time: "9:00-10:00 AM",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
        location: "Bashabo",
        resource: { name: "Suhag Mia", phone: "01700000000" },
    },
    {
        id: 1010,
        date: "2021-10-10",
        time: "9:00-10:00 AM",
        category: "AC Repair Service",
        total: 1000,
        schedule: "2021-10-10",
        status: "pending",
        location: "Bashabo",
        resource: { name: "Suhag Mia", phone: "01700000000" },
    },
];

export default function Dashboard() {
    const searchParams = useSearchParams();
    const [page, setPage] = useState({
        page: parseInt(searchParams.get("page") as string) ?? 1,
        total: 1,
    });
    const [status, setStatus] = useState(searchParams.get("status"));
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(window.location.search);
        const getData = async () => {
            const data = await getOrders(
                parseInt(params.get("page") as string) || 1,
                status
            );
            setOrders(data);
            setPage({ ...page, total: data[0]?.total });
            setLoading(false);
        };
        getData();
    }, [page.page, status]);

    return (
        <main className="grid flex-1 items-start gap-4 p-0 sm:p-0 md:gap-8">
            <Card className="w-full overflow-x-hidden">
                <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <CardTitle>Orders</CardTitle>

                    <div className="ml-auto flex items-center gap-2">
                        <div className="relative">
                            <label
                                htmlFor="search"
                                className="absolute left-2 top-2.5"
                            >
                                <span className="sr-only">Search</span>
                                <Search className="h-4 w-4" />
                            </label>
                            <Input
                                id="search"
                                placeholder="Search"
                                className="h-9 pl-8"
                                disabled
                            />
                        </div>
                        <StatusFilter status={status} setStatus={setStatus} />
                    </div>
                </CardHeader>
                <CardContent>
                    <OrderTable loading={loading} orders={orders} />
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <PaginationComponent
                        page={page}
                        total={page.total}
                        setPage={setPage}
                    />
                </CardFooter>
            </Card>
        </main>
    );
}
