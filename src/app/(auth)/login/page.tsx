import { redirect } from "next/navigation";
import LoginForm from "./form";
import { spInfo } from "@/lib/actions/sp";
import { getSession } from "@/lib/session";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description:
        "Login to DFCL Business to access your account and manage your business.",
    keywords: "DFCL Business Login",
};
export default async function LoginPage() {
    const session = await getSession();
    if (session.userId) {
        redirect("/dashboard");
    }

    return <LoginForm />;
}
