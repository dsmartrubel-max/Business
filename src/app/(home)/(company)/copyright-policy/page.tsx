import PageTitle from "@/components/reusable/pageTitle";
import { Metadata } from "next";
import AboutMenu from "../menu";
import AboutContainer from "../container";
import { Alert } from "@/components/ui/alert";

export const metadata: Metadata = {
    title: "Copyright Policy | DFCL Copyright and Intellectual Property Protection",
    description:
        "Read DFCL's copyright policy and understand how we protect intellectual property rights.",
    keywords:
        "DFCL copyright policy, intellectual property, copyright protection",
};

export default function CopyrightPolicyPage() {
    return (
        <AboutContainer title="Copyright Policy">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-xl font-bold">
                    <Alert>Coming Soon</Alert>
                </h2>
            </div>
        </AboutContainer>
    );
}
