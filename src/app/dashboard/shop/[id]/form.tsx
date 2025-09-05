import Image from "next/image";
import { products } from "../products";
import Link from "next/link";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductForm({ product }: { product: any }) {
    return (
        <div className="h-full md:col-span-2 flex flex-col gap-4">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle className="font-cal text-lg md:text-2xl lg:text-3xl">
                        {product.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className=" flex flex-col gap-4">
                    <p className="font-bold text-md md:text-xl lg:text-2xl">
                        &#2547;
                        {product.price + (product.price * product.vat) / 100}
                    </p>
                    <div className="grid gap-3">
                        <p className="md:text-md lg:text-lg">
                            Choose your size
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Button size="sm" variant="outline">
                                SM
                            </Button>
                            <Button size="sm" variant="outline">
                                MD
                            </Button>
                            <Button size="sm" variant="outline">
                                LG
                            </Button>
                            <Button size="sm" variant="outline">
                                XL
                            </Button>
                            <Button size="sm" variant="outline">
                                XXL
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <Button size="sm">
                            <ShoppingCart className="mr-2 size-4" />
                            Add to cart
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
