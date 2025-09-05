"use server";
import { redirect } from "next/navigation";

export async function VerifyOtp(formData: FormData) {
    const otp = formData.get("otp") as string;
    if (otp !== "123456") {
        return { status: 400, detail: "Invalid OTP" };
    }
    redirect("/dashboard");
}
