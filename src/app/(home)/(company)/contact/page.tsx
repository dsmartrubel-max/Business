import PageTitle from "@/components/reusable/pageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label, Required } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import AboutContainer from "../container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " Contact Us | Get in Touch with DFCL Team",
    description:
        "Contact DFCL's team. We're always ready to help with any service-related inquiries.",
    keywords:
        "DFCL contact, service support, customer support, contact information",
};

export default function ContactPage() {
    const gridItems = [
        {
            title: "Customer Care",
            icon: <Phone className="size-12 md:size-16" />,
            data: "09613828000 (24/7)",
            href: "tel:09613828000",
        },
        {
            title: "Corporate Only",
            icon: <Building2 className="size-12 md:size-16" />,
            data: "01707-078003",
            href: "tel:+8801707078003",
        },
        {
            title: "Email",
            icon: <Mail className="size-12 md:size-16" />,
            data: "care@dfclbd.com",
            href: "mailto:care@dfclbd.com",
        },
        {
            title: "Address",
            icon: <MapPin className="size-12 md:size-16" />,
            data: "103, Maddhya Basabo, Sabujbag, Dhaka-1214",
            href: "#google-map",
        },
    ];
    const data = {
        purposeOptions: [
            "Corporate Communication",
            "DFCL Business Account",
            "Customer Complaint",
            "Household Customer enquiry",
            "Corporate Customer Enquiry",
            "Job Application",
            "Legal Support",
            "Social Communication",
        ],
    };
    return (
        <AboutContainer
            title="Contact Us"
            bg="/images/banner/contact-banner.jpg"
        >
            <div className="font-sans w-full max-w-6xl mx-auto px-0 md:px-2">
                <div className="space-y-6 md:space-y-8">
                    <div className="text-center">
                        <p className="text-muted-foreground text-lg md:text-xl">
                            Have a question or need assistance? We&apos;re here
                            to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {gridItems.map((item, index) => (
                            <Link href={item.href} key={index}>
                                <Card className="h-full flex flex-col text-center bg-primary text-primary-foreground">
                                    <CardHeader>
                                        <CardTitle className="text-lg md:text-xl whitespace-nowrap">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-full">
                                        <div className="h-full text-primary-foreground flex flex-col items-center gap-3 text-md md:text-lg">
                                            {item.icon}
                                            <div className="text-sm mt-auto">
                                                {item.data}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-4 lg:mt-8 grid gap-4 lg:gap-6">
                    <h1 className="text-center font-cal text-2xl md:text-3xl lg:text-4xl">
                        Fill up this form
                    </h1>
                    <div className="md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                        <Card className="bg-primary text-primary-foreground">
                            <CardContent className="p-6 text-lg">
                                <form className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2 grid gap-3">
                                        <Label htmlFor="name">
                                            Your Name{" "}
                                            <span className="text-red-500 font-bold">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full text-primary"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Your Phone{" "}
                                            <span className="text-red-500 font-bold">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full text-primary"
                                            pattern="^01[3-9]{1}[0-9]{8}"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Your Email</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full text-primary"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="md:col-span-2 grid gap-3">
                                        <Label htmlFor="name">
                                            Subject{" "}
                                            <span className="text-red-500 font-bold">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full text-primary"
                                            placeholder="Enter subject..."
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-2 grid gap-3">
                                        <Label htmlFor="name">
                                            Your Message
                                            <span className="text-red-500 font-bold">
                                                *
                                            </span>
                                        </Label>
                                        <Textarea
                                            rows={7}
                                            name="message"
                                            className="text-primary"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex justify-center">
                                        <Button
                                            className=""
                                            variant="secondary"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div id="google-map" className="">
                <PageTitle title="Find Our Office" />
                <div className="mt-6 flex justify-center">
                    <GoogleMap />
                </div>
            </div>
        </AboutContainer>
    );
}

function GoogleMap() {
    return (
        <Suspense
            fallback={
                <div className="flex flex-col items-center justify-center">
                    <p>Loading...</p>
                </div>
            }
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.63294167022644!2d90.42676404206617!3d23.74160430049876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b953fc8006d3%3A0xf31abf55c91a24c4!2sDFCL!5e0!3m2!1sen!2sbd!4v1722237557930!5m2!1sen!2sbd"
                width="1200"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 object-contain"
            ></iframe>
        </Suspense>
    );
}
