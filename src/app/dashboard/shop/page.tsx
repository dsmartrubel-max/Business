import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import BuyPackage from "../package/buy";
import BuyProduct from "./buy";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { products } from "./products";
export default function ShopPage() {
    return (
        <div className="w-full max-w-6xl mx-auto grid gap-6">
            <div className="flex items-center justify-between">
                <h2 className="font-cal text-lg md:text-xl lg:text-2xl">
                    Shop
                </h2>
                <Link href="/dashboard/shop/cart">
                    <Button size="sm">
                        <ShoppingCart className="mr-2 size-4" />
                        Cart
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardHeader className="p-0">
                            <div className="aspect-square size-full">
                                <Image
                                    src="/placeholder.svg"
                                    alt={product.name}
                                    width={250}
                                    height={250}
                                    className="aspect-square size-full object-cover object-center"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="p-3 md:p-4 lg:p-6">
                            <CardTitle className="text-base">
                                {product.name}
                            </CardTitle>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                                <div className="font-bold text-base md:text-lg">
                                    &#2547;
                                    {product.price +
                                        (product.price * product.vat) / 100}
                                </div>
                                <div>
                                    <Link
                                        href={`/dashboard/shop/${product.id}`}
                                    >
                                        <Button size="sm" className="w-full">
                                            View
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
