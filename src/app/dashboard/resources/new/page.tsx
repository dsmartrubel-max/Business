"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label, Required } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
export default function AddResource() {
    const [phone, setPhone] = useState("");
    const [otpStatus, setOtpStatus] = useState("");

    const sendOtp = () => {
        setOtpStatus("sending");
        setTimeout(() => {
            setOtpStatus("sent");
        }, 2000);
    };

    return (
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto max-w-[59rem] grid flex-1 gap-4">
                <Link href="/dashboard/resources">
                    <Button
                        className="flex items-center gap-3"
                        variant="ghost"
                        size="sm"
                    >
                        <ChevronLeft />
                        Back to Resource List
                    </Button>
                </Link>
                <div className="flex items-center gap-4">
                    <h1 className="flex-1 shrink-0 whitespace-nowrap font-cal text-3xl font-semibold tracking-tight sm:grow-0">
                        Add Resource
                    </h1>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm">
                            Discard
                        </Button>
                        <Button size="sm">Submit For Review</Button>
                    </div>
                </div>
                <div className="grid  items-start gap-4 lg:gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        Resource Name
                                        <Required />
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Resource's Name"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        Date Of Birth
                                        <Required />
                                    </Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="dob"
                                            type="date"
                                            className="w-full"
                                            placeholder="Date"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="fathers_name">
                                        Father&apos;s Name
                                        <Required />
                                    </Label>
                                    <Input
                                        id="fathers_name"
                                        name="fathers_name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Resource's Father's Name"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="mothers_name">
                                        Mother&apos;s Name
                                        <Required />
                                    </Label>
                                    <Input
                                        id="mothers_name"
                                        name="mothers_name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Resource's Mother's Name"
                                        required
                                    />
                                </div>

                                <div className="lg:col-span-2 grid gap-3">
                                    <Label htmlFor="name">
                                        Present Address
                                        <Required />
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Street Address"
                                        required
                                    />
                                    <div className="grid lg:grid-cols-3 gap-3">
                                        <Select required>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select Division" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Division
                                                    </SelectLabel>

                                                    <SelectItem value="Dhaka">
                                                        Dhaka
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <Select required>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select District" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        District
                                                    </SelectLabel>

                                                    <SelectItem value="Dhaka">
                                                        Dhaka
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <Select required>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select Area" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Area
                                                    </SelectLabel>

                                                    <SelectItem value="Sabujbag">
                                                        Sabujbag
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 grid gap-3">
                                    <Label htmlFor="name">
                                        Permament Address
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Permanent Address"
                                    />
                                </div>
                                <div className=" grid gap-3">
                                    <Label htmlFor="phone">
                                        Mobile Number
                                        <Required />
                                    </Label>
                                    <div className="flex gap-3">
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter an active phone number"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className=" grid gap-3">
                                    <Label htmlFor="email">Email Address</Label>
                                    <div className="flex gap-3">
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="w-full"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>National ID</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        Front Size Image
                                        <Required />
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="file"
                                        className="w-full"
                                        placeholder="Enter Resource's Name"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        Back Side Image
                                        <Required />
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="file"
                                        className="w-full"
                                        placeholder="Enter Resource's Name"
                                        required
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Location</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid  gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Dhaka</Label>
                                    <div className="flex flex-wrap gap-3">
                                        <Button size="sm" variant="outline">
                                            Basabo
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            Khilgaon
                                        </Button>
                                    </div>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Chittagong</Label>
                                    <div className="flex flex-wrap gap-3">
                                        <Button size="sm" variant="outline">
                                            Halishahar
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            GEC
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid  gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        AC Gas Filling R-32
                                    </Label>
                                    <div className="flex flex-wrap gap-3">
                                        <Button size="sm" variant="outline">
                                            AC Gas Filling R-32 1 Ton
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            AC Gas Filling R-32 2 Ton
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Bank Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Bank Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter company name"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Branch Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter company address"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Account Title</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Account Title"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">bkash Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Nagad Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Rocket Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        Discard
                    </Button>
                    <Button size="sm">Submit For Review</Button>
                </div>
            </div>
        </main>
    );
}
