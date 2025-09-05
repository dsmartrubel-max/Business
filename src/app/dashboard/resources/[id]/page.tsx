import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

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

const account_summary = [
    {
        title: "Sell Today",
        value: 0,
    },
    {
        title: "Sell This Week",
        value: 0,
    },
    {
        title: "Sell This Month",
        value: 0,
    },
    {
        title: "Sell Last Month",
        value: 0,
    },

    {
        title: "Sell Last 6 Months",
        value: 0,
    },

    {
        title: "Sell This Year",
        value: 0,
    },
    {
        title: "Sell Last Year",
        value: 0,
    },

    {
        title: "Total Sell",
        value: 0,
    },
];

const summary = [
    {
        title: "Active",
        value: 0,
        href: "#",
    },
    {
        title: "Processing",
        value: 0,
        href: "#",
    },
    {
        title: "Today",
        value: 0,
        href: "#",
    },
    {
        title: "Tomorrow",
        value: 0,
        href: "#",
    },
    {
        title: "Bill Request",
        value: 0,
        href: "#",
    },
    {
        title: "Served",
        value: 0,
        href: "#",
    },
    {
        title: "Complete",
        value: 0,
        href: "#",
    },
    {
        title: "Cancelled",
        value: 0,
        href: "#",
    },
    {
        title: "All Orders",
        value: 0,
        href: "#",
    },
];

export default function ResourceOrders() {
    return (
        <main className="grid flex-1 items-start gap-4 md:gap-4">
            <h2 className="text-xl md:2xl lg:3xl font-cal">Order Summary</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {summary.map((item, index) => (
                    <Link
                        key={index}
                        // href={`/dashboard/orders${item.href}`}
                        href="#"
                        className="h-full"
                    >
                        <SummaryCard item={item} />
                    </Link>
                ))}
            </div>
            <h2 className="text-xl md:2xl lg:3xl font-cal">Accounts Summary</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {account_summary.map((item, index) => (
                    <div className="h-full" key={index}>
                        <SummaryCard item={item} />
                    </div>
                ))}
            </div>
        </main>
    );
}

function SummaryCard({ item }: { item: any }) {
    return (
        <Card className="h-full border-2 hover:border-primary">
            <CardContent className="px-0 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 flex flex-col items-center md:items-center gap-2">
                <p className="text-center text-xs md:text-base font-bold whitespace-nowrap w-full truncate">
                    {item.title}
                </p>
                <p className="text-lg md:text-2xl font-bold">{item.value}</p>
            </CardContent>
        </Card>
    );
}
