import Image from "next/image";
import { products } from "../products";
import Link from "next/link";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductForm from "./form";

export default function ShopPage({ params }: { params: { id: number } }) {
    //find product by id
    const product = products[params.id];
    return (
        <div className="w-full max-w-5xl mx-auto grid gap-4">
            <div className="flex items-center justify-between">
                <Link href="/dashboard/shop">
                    <Button size="sm" className="h-9 flex items-center gap-2">
                        <ChevronLeft className="size-4" />
                        Back to Shop
                    </Button>
                </Link>
                <Link href="/dashboard/shop/cart">
                    <Button size="sm">
                        <ShoppingCart className="mr-2 size-4" />
                        Cart
                    </Button>
                </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="size-full aspect-square rounded-lg border shadow overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="size-full object-cover object-center"
                    />
                </div>
                <ProductForm product={product} />
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Description</CardTitle>
                    </CardHeader>
                    <CardContent>{product.description}</CardContent>
                </Card>
            </div>
        </div>
    );
}
