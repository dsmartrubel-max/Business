"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";

export function AddNominee() {
    const [otpStatus, setOtpStatus] = useState("");
    const sendOtp = () => {
        setOtpStatus("sending");
        setTimeout(() => {
            setOtpStatus("sent");
        }, 2000);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className=" sm:whitespace-nowrap">Add Nominee</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[525px]">
                <form action="">
                    <DialogHeader>
                        <DialogTitle>Add Nominee</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Abul Mia"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="nid" className="text-right">
                                National ID
                            </Label>
                            <Input
                                id="nid"
                                name="nid"
                                type="text"
                                pattern="^\d{10}|\d{13}|\d{17}$"
                                title="Enter 10, 13, or 17 digits National ID"
                                placeholder="1234567890"
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@gmail.com"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Mobile Number
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                pattern="^01[3-9]\d{8}$"
                                placeholder="017XXXXXXXX"
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                OTP
                            </Label>
                            {otpStatus === "sent" ? (
                                <Input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    pattern="^\d{6}$"
                                    placeholder="123456"
                                    className="col-span-3"
                                    required
                                />
                            ) : (
                                <Button
                                    onClick={() => sendOtp()}
                                    disabled={otpStatus === "sending"}
                                    size="sm"
                                >
                                    {otpStatus === "sending"
                                        ? "Sending OTP..."
                                        : "Send OTP"}
                                </Button>
                            )}
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="address" className="text-right">
                                Address
                            </Label>
                            <Input
                                id="address"
                                placeholder="Road No. 123, House No. 456"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit For Review</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
