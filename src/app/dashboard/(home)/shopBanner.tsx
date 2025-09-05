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
import DFCL from "./dfcl.jpg";
import { Badge } from "@/components/ui/badge";

export default function ShopBanner() {
    return (
        <div className="max-w-full grid gap-4">
            <div>
                <Badge className="font-cal text-xl md:text-2xl lg:text-3xl">
                    Shop Now
                </Badge>
            </div>
            <Carousel className="w-full" plugins={[Autoplay(), Fade()]}>
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Link href="/dashboard/shop">
                                <div className="p-0">
                                    <Card className="">
                                        <CardContent className=" aspect-[16/8] lg:aspect-[1920/500] p-0 size-full overflow-hidden rounded-lg">
                                            <Image
                                                src={DFCL}
                                                alt="DFCL"
                                                height={500}
                                                width={1920}
                                                className="h-full w-full object-cover object-center"
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
