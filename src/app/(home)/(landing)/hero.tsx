"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function BannerSection({
    data,
}: {
    data: { image?: string; text: string; href: string }[];
}) {
    return (
        <Carousel className="w-full" plugins={[Autoplay(), Fade()]}>
            <CarouselContent>
                {data.map((item, index) => (
                    <CarouselItem key={index}>
                        <Link href={item.href} className="p-0">
                            <Card>
                                <CardHeader className="p-0">
                                    <CardTitle></CardTitle>
                                </CardHeader>
                                <CardContent
                                    style={
                                        item.image
                                            ? {
                                                  backgroundImage: `var(--image-url, url(${item.image}))`,
                                              }
                                            : {}
                                    }
                                    className={`rounded-lg overflow-hidden aspect-video md:aspect-banner p-0  size-full ${
                                        item.image
                                            ? "bg-primary/60 bg-cover bg-center  bg-blend-overlay"
                                            : "bg-primary"
                                    } `}
                                >
                                    <div className="h-full w-full mx-auto max-w-7xl flex justify-end">
                                        <div className="px-6 h-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl w-full ml-auto flex flex-col items-end justify-center">
                                            <h2 className="text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold font-cal text-white text-center md:text-right">
                                                {item.text}
                                            </h2>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
