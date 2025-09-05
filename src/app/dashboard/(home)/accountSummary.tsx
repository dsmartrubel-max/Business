"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function AccountsSummary({ summary }: { summary: any }) {
    const [data, setData] = useState<any[]>(summary.slice(0, 4));
    useEffect(() => {
        const width = window.innerWidth;
        if (width < 768) {
            setData(summary.slice(0, 4));
        } else {
            setData(summary);
        }
    }, [summary]);

    const hideOrShow = () => {
        if (data.length == 8) {
            setData(summary.slice(0, 4));
        } else {
            setData(summary);
        }
    };
    return (
        <div className="grid gap-4">
            <h1 className="text-2xl font-cal md:text-2xl">Accounts Summary</h1>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 ">
                {data.map((item, index) => (
                    <Link
                        key={index}
                        href={`/dashboard/transactions`}
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
                    {data.length == 8 ? "Show Less" : "Show More"}
                </Button>
            </div>

            {/*<Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem className="">
                        <CarouselGrid data={summary.slice(0, 4)} />
                    </CarouselItem>
                    <CarouselItem className="">
                        <CarouselGrid data={summary.slice(4, 8)} />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>*/}
        </div>
    );
}

function CarouselGrid({ data }: { data: any[] }) {
    return (
        <div className="grid md:hidden grid-cols-2 gap-4">
            {data.map((item, index) => (
                <Link
                    key={index}
                    href={`/dashboard/transactions`}
                    className="h-full"
                >
                    <SummaryCard item={item} />
                </Link>
            ))}
        </div>
    );
}

function SummaryCard({ item }: { item: any }) {
    return (
        <Card className="h-full border-2 hover:border-primary">
            <CardContent className="px-1 py-2 md:p-4 lg:p-6 flex flex-col items-center md:items-center gap-2">
                <p className="text-center text-xs md:text-base font-bold">
                    {item.title}
                </p>
                <p className="text-lg md:text-2xl font-bold">{item.value}</p>
            </CardContent>
        </Card>
    );
}
