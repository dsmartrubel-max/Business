import { Metadata } from "next";
import AboutMenu from "../menu";
import AboutContainer from "../container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { useLocale, useTranslations } from "next-intl";
import Bangla from "./bn";
import English from "./en";

export const metadata: Metadata = {
    title: "Privacy Policy | DFCL's Data Protection Policy",
    description:
        "Learn about DFCL's privacy policy and how we work to protect your personal information.",
    keywords:
        "DFCL, DFCL privacy policy, data protection, personal information, privacy protection",
};

export default function PrivacyPolicyPage() {
    const t = useTranslations("company");
    const locale = useLocale();

    return (
        <AboutContainer title={t("privacy")}>
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 prose 2xl:prose-xl">
                {locale == "bn" ? <Bangla /> : <English />}
                <Alert className="text-center font-bold py-2">
                    If you have any questions or concerns about this Privacy
                    Policy, please{" "}
                    <Link href="/contact">
                        <strong>Contact Us</strong>
                    </Link>
                </Alert>
            </div>
        </AboutContainer>
    );
}
