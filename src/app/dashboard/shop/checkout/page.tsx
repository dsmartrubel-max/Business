import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import PaymentMethods from "./methods";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
export default function Checkout() {
    return (
        <div className="w-full max-w-5xl mx-auto grid gap-6">
            <div className="flex items-center justify-between">
                <Link href="/dashboard/shop/cart">
                    <Button size="sm" className="h-9 flex items-center gap-2">
                        <ChevronLeft className="size-4" />
                        Back to Cart
                    </Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Checkout</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Reciever Name</Label>
                            <Input
                                id="name"
                                type="text"
                                className="w-full"
                                placeholder="Reciever name"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="name">Phone Number</Label>
                            <Input
                                id="name"
                                type="text"
                                className="w-full"
                                placeholder="Reciever Phone"
                            />
                        </div>
                        <div className="md:col-span-2 grid gap-3">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="adress"
                                type="text"
                                className="w-full"
                                placeholder="Address"
                            />
                        </div>
                        <div className="grid md:col-span-2 md:grid-cols-3 gap-6">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Division" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Division</SelectLabel>
                                        <SelectItem value="dhaka">
                                            Dhaka
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="grid gap-3">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select District" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>District</SelectLabel>
                                            <SelectItem value="dhaka">
                                                Dhaka
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select area" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Area</SelectLabel>
                                            <SelectItem value="bashabo">
                                                Bashabo
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className=" grid gap-3">
                            <Label htmlFor="payment_method">
                                Payment Method
                            </Label>
                            <PaymentMethods />
                        </div>
                        <div className=" flex flex-col items-end justify-end">
                            <Button>Place Order</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
