"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { LoadingCircle } from "@/components/icons";
import { redirect } from "next/navigation";
import { set } from "date-fns";
import { VerifyOtp } from "@/lib/actions/auth";
export default function OTpVerifyForm() {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (formData: FormData) => {
        setLoading(true);
        setError("");
        //2 seconds timer to mimic server response
        setTimeout(async () => {
            const response = await VerifyOtp(formData);
            if (response.status === 400) {
                setError(response.detail);
                setLoading(false);
                setOtp("");
                return;
            } else {
                setLoading(false);
            }
        }, 2000);
    };
    return (
        <Card className="mx-auto max-w-sm">
            <Link href="/" className="flex justify-center mt-6">
                <Image
                    src="/business.png"
                    width={120}
                    height={100}
                    alt="DFCL Business"
                />
            </Link>
            <CardHeader>
                <CardTitle className="text-2xl font-cal">
                    Verify Your Mobile Number
                </CardTitle>
                <CardDescription>Enter otp sent to you mobile.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={handleSubmit}>
                    <div className="grid gap-4">
                        <InputOTP
                            name="otp"
                            inputMode="numeric"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e)}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} className="w-12 h-12" />
                                <InputOTPSlot index={1} className="w-12 h-12" />
                                <InputOTPSlot index={2} className="w-12 h-12" />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} className="w-12 h-12" />
                                <InputOTPSlot index={4} className="w-12 h-12" />
                                <InputOTPSlot index={5} className="w-12 h-12" />
                            </InputOTPGroup>
                        </InputOTP>
                        {error && (
                            <div className="text-accent text-xs font-bold">
                                {error}
                            </div>
                        )}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? <LoadingCircle /> : "Verify"}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Didnt get otp?{" "}
                        <Button variant="link" className="" type="button">
                            Send Again
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
