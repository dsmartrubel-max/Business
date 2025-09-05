import PageTitle from "@/components/reusable/pageTitle";
import { Alert } from "@/components/ui/alert";
import AboutContainer from "../container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Investors | Investment Opportunities at DFCL",
    description:
        "Learn about investment opportunities and growth strategies at DFCL. Profit from partnering with us.",
    keywords:
        "DFCL investment, investors, financial growth, investment opportunities",
};

export default function Investors() {
    return (
        <AboutContainer title="Investors">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-xl font-bold">
                    <Alert>Coming Soon</Alert>
                </h2>
            </div>
        </AboutContainer>
    );
}
