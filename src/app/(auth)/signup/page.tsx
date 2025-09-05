import SignUpForm from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up",
    description:
        "Sign Up for DFCL Business to access your account and manage your business.",
    keywords: "DFCL Business Sign Up",
};
export default function SignUpPage() {
    return <SignUpForm />;
}
