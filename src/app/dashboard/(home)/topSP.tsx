"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
export default function TopSP() {
    const summary = [
        {
            title: "Yesterday",
            value: "45",
            image: "https://admin.dfclbd.com/media/resource_images/71722000_SP%20ID%209.jpg",
            name: "Sohag Engineering",
        },
        {
            title: "Last Week",
            value: "50",
            image: "https://admin.dfclbd.com/media/resource_images/23918615_SP%20ID%2026.jpeg",
            name: "Sohag Engineering",
        },
        {
            title: "Last 15 Days",
            value: "34",
            image: "https://randomuser.me/api/portraits/lego/5.jpg",
            name: "Sohag Engineering",
        },
        {
            title: "Last 30 Days",
            value: "3",
            image: "https://randomuser.me/api/portraits/lego/4.jpg",
            name: "Sohag Engineering",
        },
    ];
    return (
        <div className="grid gap-4">
            <div>
                <Badge className="text-xl font-cal md:text-2xl lg:text-3xl border-2 border-accent">
                    Top Service Partners
                </Badge>
            </div>
            <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 ">
                {summary.map((item, index) => (
                    <div key={index}>
                        <SPDetails item={item} />
                    </div>
                ))}
            </div>
            {/* <Carousel className="w-full" plugins={[Autoplay()]}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="grid gap-4 grid-cols-2 md:hidden">
                            {summary.slice(0, 2).map((item, index) => (
                                <div key={index}>
                                    <SPDetails item={item} />
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="grid gap-4 grid-cols-2 md:hidden">
                            {summary.slice(2, 4).map((item, index) => (
                                <div key={index}>
                                    <SPDetails item={item} />
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel> */}
            <div className="grid gap-4 grid-cols-2 md:hidden">
                {summary.map((item, index) => (
                    <div key={index}>
                        <SPDetails item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function SPDetails({ item }: { item: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="h-full rounded-lg cursor-pointer">
                    <Card className=" border-2 hover:border-primary h-full">
                        <CardContent className="p-2 md:p-4 lg:p-6 flex flex-col items-center gap-3">
                            <span className="font-sans text-sm md:text-base text-center font-bold ">
                                {item.title}
                            </span>
                            <div className="w-3/4 aspect-square overflow-hidden rounded-full border-2 border-primary">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height={500}
                                    width={500}
                                    className="object-cover object-center"
                                />
                            </div>
                            <p className=" px-3 py-1 text-sm md:text-base lg:text-lg md:text-md font-bold text-center line-clamp-1">
                                {item.name}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </DialogTrigger>
            <DialogContent className="font-sans max-w-[400px] sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{item.title} Top SP</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="flex items-center justify-start gap-4">
                        <Avatar className="size-20">
                            <AvatarImage src={item.image} alt={item.title} />
                            <AvatarFallback>{item.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-cal text-lg md:text-xl">
                                {item.name}
                            </h2>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button type="submit" variant="outline" size="sm">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
