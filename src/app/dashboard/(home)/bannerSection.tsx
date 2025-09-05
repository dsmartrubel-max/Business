"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function BannerSection() {
    const banners = [
        {
            title: "Payment Offer",
            image: "/images/banner/paymentoffer1.gif",
            href: "/dashboard/offers",
        },
    ];
    return (
        <div className="grid gap-4">
            <div>
                <Badge className="font-cal text-xl md:text-2xl lg:text-3xl">
                    My Offer
                </Badge>
            </div>
            <Carousel className="w-full" plugins={[Autoplay(), Fade()]}>
                <CarouselContent>
                    {banners.map((item, index) => (
                        <CarouselItem key={index}>
                            <Link href={item.href}>
                                <div className="p-0">
                                    <Card className="">
                                        <CardContent className="bg-primary aspect-[1920/720] p-0 size-full overflow-hidden rounded-lg">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                height={720}
                                                width={1920}
                                                className="h-full w-full object-contain object-center"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
