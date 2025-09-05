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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { LoadingCircle, LoadingSpinner } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Prevents the default form submission
        setLoading(true);
        setError("");
        const formData = new FormData(event.target);
        try {
            // logging in
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone: formData.get("phone"),
                    password: formData.get("password"),
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccess("Logged in successfully.");
                router.push("/dashboard");
            } else {
                throw new Error("Something went wrong.");
            }
            // router.push("/dashboard");
        } catch (error) {
            setError("Invalid phone number or password.");
            setLoading(false);
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
                    DFCL Business Login
                </CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Mobile Number</Label>
                            <Input
                                id="phone"
                                type="text"
                                pattern="01[3-9]{1}[0-9]{8}"
                                title="Enter a valid Bangladeshi mobile number"
                                name="phone"
                                placeholder="01700000000"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                required
                            />
                        </div>
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
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? <LoadingCircle /> : "Login"}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
