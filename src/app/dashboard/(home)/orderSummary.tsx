"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OrderSummary({ summary }: { summary: any[] }) {
    const [data, setData] = useState<any[]>(summary.slice(0, 6));
    useEffect(() => {
        const width = window.innerWidth;
        if (width < 768) {
            setData(summary.slice(0, 6));
        } else {
            setData(summary);
        }
    }, [summary]);
    const hideOrShow = () => {
        if (data.length == 12) {
            setData(summary.slice(0, 6));
        } else {
            setData(summary);
        }
    };
    return (
        <div className="grid gap-4 ">
            <div>
                <Badge className="text-xl font-cal md:text-2xl lg:text-3xl">
                    Order Summary
                </Badge>
            </div>
            <div className=" grid gap-3 grid-cols-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 2xl:grid-cols-6">
                {data.map((item, index) => (
                    <Link
                        key={index}
                        href={`/dashboard/orders${item.href}`}
                        className="h-full"
                    >
                        <SummaryCard item={item} />
                    </Link>
                ))}
            </div>
            <div className="flex md:hidden justify-end">
                <Button
                    className="w-full"
                    variant="outline"
                    size="sm"
                    onClick={() => hideOrShow()}
                >
                    {data.length == 12 ? "Show Less" : "Show More"}
                </Button>
            </div>
        </div>
    );
}

function SummaryCard({ item }: { item: any }) {
    return (
        <Card className="h-full border-2 hover:border-primary">
            <CardContent className="px-0 py-2 md:p-4 lg:p-6 flex flex-col items-center md:items-center gap-2">
                <p className="text-center text-xs md:text-base font-bold whitespace-nowrap w-full truncate">
                    {item.title}
                </p>
                <p className="text-lg md:text-2xl font-bold">{item.value}</p>
            </CardContent>
        </Card>
    );
}