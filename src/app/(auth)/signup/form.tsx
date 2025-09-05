"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import Image from "next/image";
import { LoadingCircle } from "@/components/icons";

export default function SignUpForm() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (formData: FormData) => {
        setError("");
        setLoading(true);
        //2 seconds timer to mimic server response
        setTimeout(() => {
            if (password !== formData.get("password2")) {
                setError("Passwords do not match");
                setLoading(false);
                return;
            }
            const phone = formData.get("phone") as string;

            if (phone.length !== 11 && !phone.startsWith("01")) {
                setError("Invalid phone number");
                setLoading(false);
                return;
            }
            //if no error
            router.push("/signup/verify");
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
                {/* <div className="flex gap-2">
                    <ChevronLeft />
                    Back to homepage
                </div> */}
                <CardTitle className="text-2xl font-cal">
                    Create a Business Account
                </CardTitle>
                <CardDescription>
                    Enter your information to sign up
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <div className="relative flex-1">
                                <Input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full px-4 py-2 pr-24 text-sm "
                                />
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center p-2 text-sm font-medium text-secondary-foreground bg-secondary rounded-r-md border">
                                    @dfcl.xyz
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="username">Mobile Number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                pattern="01[3-9]{1}[0-9]{8}"
                                placeholder="017XXXXXXXX"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                name="value"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password2">
                                    Password Again
                                </Label>
                            </div>
                            <Input
                                id="password2"
                                name="password2"
                                type="password"
                                pattern={password}
                                required
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 text-xs font-bold">
                                {error}
                            </div>
                        )}
                        <Button disabled={loading}>
                            {loading ? <LoadingCircle /> : "Create Account"}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Login
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
