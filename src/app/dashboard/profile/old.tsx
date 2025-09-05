import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Profile() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid lg:max-w-6xl xl:max-w-7xl flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                    <h1 className="flex-1 shrink-0 whitespace-nowrap font-cal text-3xl font-semibold tracking-tight sm:grow-0">
                        Company Profile
                    </h1>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button size="sm">Update Company</Button>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-3 lg:gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Company Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Company Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter company name"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Company Slug
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="enter-company-name"
                                        />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Company Owner Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter company owner name"
                                        />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Corporate Email
                                        </Label>
                                        <Input
                                            id="name"
                                            type="email"
                                            className="w-full"
                                            placeholder="contact@company.com"
                                        />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Company Adress
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter company address"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">
                                                Trade License No.
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                placeholder="Enter trade license number"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">
                                                Trade License Expiry Date
                                            </Label>
                                            <Input
                                                id="date"
                                                type="date"
                                                className="w-full"
                                                placeholder="31-12-2025"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">
                                                TIN Number
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                placeholder="TIN Number"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">
                                                BIN Number
                                            </Label>
                                            <Input
                                                id="bin"
                                                type="text"
                                                className="w-full"
                                                placeholder="00000000"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Joined On</Label>
                                        <Input
                                            id="name"
                                            type="date"
                                            className="w-full"
                                            disabled
                                            defaultValue={new Date(
                                                "01/01/2000"
                                            ).toISOString()}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Bank Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Account Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter Account Holder's Name"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Account Number
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Account Number"
                                            disabled
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Bank Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter bank Name"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Branch Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter Branch Name"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Routing Number
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter Routing Number"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Mobile Banking</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            bkash Number
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="017XXXXXXXX"
                                            disabled
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Nagad Number
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="017XXXXXXXX"
                                            disabled
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Rocket Number
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="017XXXXXXXX"
                                            disabled
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Upay Number
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="017XXXXXXXX"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-4 lg:col-span-2 lg:grid-cols-2">
                        <div className="grid gap-4">
                            <Card
                                className="overflow-hidden"
                                x-chunk="dashboard-07-chunk-4"
                            >
                                <CardHeader>
                                    <CardTitle>Company Logo</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <Image
                                            alt="Product image"
                                            className="aspect-square w-full rounded-md object-cover"
                                            height="300"
                                            src="/placeholder.svg"
                                            width="300"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card
                                className="overflow-hidden"
                                x-chunk="dashboard-07-chunk-4"
                            >
                                <CardHeader>
                                    <CardTitle>Trade License</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <Image
                                            alt="Product image"
                                            className="aspect-paper w-full rounded-md object-cover"
                                            height="400"
                                            src="/placeholder.svg"
                                            width="300"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card
                                className="overflow-hidden"
                                x-chunk="dashboard-07-chunk-4"
                            >
                                <CardHeader>
                                    <CardTitle>Business Card</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <Image
                                            alt="Business Card"
                                            className="aspect-video w-full rounded-md object-cover"
                                            height="180"
                                            src="/placeholder.svg"
                                            width="320"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card
                                className="overflow-hidden"
                                x-chunk="dashboard-07-chunk-4"
                            >
                                <CardHeader>
                                    <CardTitle>Bank Check</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <Image
                                            alt="Bank Check"
                                            className="aspect-[5/2] w-full rounded-md object-cover"
                                            height="180"
                                            src="/placeholder.svg"
                                            width="320"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4">
                            <Card
                                className="overflow-hidden"
                                x-chunk="dashboard-07-chunk-4"
                            >
                                <CardHeader>
                                    <CardTitle>TIN</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <Image
                                            alt="Product image"
                                            className="aspect-paper w-full rounded-md object-cover"
                                            height="400"
                                            src="/placeholder.svg"
                                            width="300"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card
                                className="overflow-hidden"
                                x-chunk="dashboard-07-chunk-4"
                            >
                                <CardHeader>
                                    <CardTitle>BIN</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <Image
                                            alt="Product image"
                                            className="aspect-paper w-full rounded-md object-cover"
                                            height="400"
                                            src="/placeholder.svg"
                                            width="300"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                </div>
            </div>
        </main>
    );
}
