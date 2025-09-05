"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordForm() {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpStatus, setOtpStatus] = useState("pending");
    //otpStatus can be pending, sent, verified, failed, success
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Prevents the default form submission
        setLoading(true);
        setError("");
        const formData = new FormData(event.target);
        if (otpStatus == "pending") {
            //send otp
            setTimeout(() => {
                // setOtpSent(true);
                setSuccess("OTP sent successfully.");
                setOtpStatus("sent");
                setLoading(false);
            }, 2000);
            return;
        }

        if (otpStatus == "sent") {
            //verify otp
            setTimeout(() => {
                setOtpStatus("verified");
                setSuccess("OTP verified successfully.");
                // setLoading(false);
                setLoading(false);
            }, 2000);
            return;
        }

        if (otpStatus == "verified") {
            //check for common passwords
            //reset password
            setTimeout(() => {
                setSuccess("Password reset successfully.");
                setOtpStatus("success");
                // setLoading(false);
                setLoading(false);
            }, 2000);
            return;
        }
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
                    Password Reset
                </CardTitle>
                <CardDescription>
                    Reset your password using your mobile number.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* <p>This feature is not available yet.</p> */}
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-3">
                        {otpStatus == "pending" ? (
                            <div className="grid gap-3">
                                <Label htmlFor="mobile">
                                    Enter your mobile number
                                </Label>
                                <Input
                                    id="mobile"
                                    name="mobile"
                                    type="text"
                                    placeholder="017XXXXXXXX"
                                    pattern="^01[3-9]{1}[0-9]{8}$"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    title="Enter a valid Bangladeshi mobile number"
                                    required
                                />
                            </div>
                        ) : otpStatus == "sent" ? (
                            <div className="grid gap-3">
                                <Label htmlFor="otp">Enter OTP</Label>
                                <Input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    placeholder="Enter otp here"
                                    pattern="^[0-9]{6}$"
                                    title="Enter a 6 digit otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                        ) : otpStatus == "verified" ? (
                            <div className="grid gap-3">
                                <Label htmlFor="password">
                                    Enter new password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter new password"
                                    required
                                />
                                <Label htmlFor="confirm_password">
                                    Confirm new password
                                </Label>
                                <Input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    pattern={password}
                                    placeholder="Confirm new password"
                                    required
                                />
                            </div>
                        ) : (
                            otpStatus == "success" && (
                                <div className="grid gap-3">
                                    <Link href="/login" className="w-full">
                                        <Button className="w-full">
                                            Login Now
                                        </Button>
                                    </Link>
                                </div>
                            )
                        )}

                        {error && (
                            <div className="text-red-500 text-xs font-bold">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="text-green-600 text-xs font-bold">
                                {success}
                            </div>
                        )}
                        {otpStatus != "success" && (
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading
                                    ? "Loading..."
                                    : otpStatus == "pending"
                                    ? "Send OTP"
                                    : otpStatus == "sent"
                                    ? "Verify OTP"
                                    : "Reset Password"}
                            </Button>
                        )}
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
