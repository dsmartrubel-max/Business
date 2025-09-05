import AboutContainer from "../container";
import FaqContent from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Common Questions about DFCL Services",
    description:
        "Read answers to common questions about DFCL's services, policies, and support.",
    keywords: "DFCL FAQ, common questions, support, customer inquiries",
};
export default function FAQ() {
    return (
        <AboutContainer
            title="Frequently Asked Questions"
            bg="/images/banner/question-banner.jpg"
        >
            <FaqContent />
        </AboutContainer>
    );
}
