import PageTitle from "@/components/reusable/pageTitle";
import { Metadata } from "next";
import { methods } from "./methods";
import Image from "next/image";
import AboutContainer from "../container";
import PaymentMethodsContent from "./content";
export const metadata: Metadata = {
    title: "Payment Methods | Secure and Easy Payment with DFCL",
    description:
        "Discover DFCL's secure and affordable payment methods. We ensure safe payment solutions.",
    keywords:
        "DFCL payment methods, secure payment, online payment, payment solutions",
};

export default function PaymentMethodsPage() {
    return (
        <AboutContainer
            title="Payment Methods"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 ">
                <PaymentMethodsContent />
            </div>
        </AboutContainer>
    );
}
