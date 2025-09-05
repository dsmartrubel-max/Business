import PageTitle from "@/components/reusable/pageTitle";
import { Metadata } from "next";
import AboutMenu from "../menu";
import AboutContainer from "../container";
import { Alert } from "@/components/ui/alert";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import English from "./en";
import Bangla from "./bn";
export const metadata: Metadata = {
    title: "Terms of Use | DFCL Service Terms",
    description:
        "Read DFCL's terms of use for the website and services. Learn more about our policies.",
    keywords:
        "DFCL, Terms of Use, Service Terms, DFCL Service Terms, DFCL, terms of use, service policies, usage terms",
};
export default function TermsPage() {
    const t = useTranslations("company");
    const locale = useLocale();

    return (
        <AboutContainer title={t("terms")}>
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-4 lg:py-8 prose 2xl:prose-xl text-justify">
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
