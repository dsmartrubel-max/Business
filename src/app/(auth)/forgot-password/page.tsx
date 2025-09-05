import { Metadata } from "next";
import ForgotPasswordForm from "./form";
export const metadata: Metadata = {
    title: "Forgot Password",
    description: "Reset your DFCL Business account password.",
    keywords: "DFCL Business Forgot Password",
};

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />;
}
