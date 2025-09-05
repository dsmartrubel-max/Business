import PageTitle from "@/components/reusable/pageTitle";
import { Metadata } from "next";
import AboutContainer from "../container";
import { Alert } from "@/components/ui/alert";

export const metadata: Metadata = {
    title: "Trademark Policy | DFCL Brand Protection",
    description:
        "Learn about DFCL's trademark policy and how our brand is protected.",
    keywords:
        "DFCL trademark policy, brand protection, intellectual property, trademark",
};

export default function TrademarkPolicyPage() {
    return (
        <AboutContainer title="Trademark Policy">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-xl font-bold">
                    <Alert>Coming Soon</Alert>
                </h2>
            </div>
        </AboutContainer>
    );
}
