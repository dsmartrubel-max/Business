import PageTitle from "@/components/reusable/pageTitle";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Eye, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Metadata } from "next";
import BOD from "./bod";
import Brands from "./brands";
import ApprovedBy from "./approvedby";
import AboutMenu from "../menu";
import AboutContainer from "../container";
export const metadata: Metadata = {
    title: "About Us | DFCL Leading Service Provider in Bangladesh",
    description:
        "Learn about DFCL's mission, vision, and commitment to quality service. We are dedicated to providing reliable and high-quality services.",
    keywords:
        "DFCL, About Us, services in Bangladesh, handyman services, handyman services in Bangladesh, mission, vision, service quality",
};

export default function AboutPage() {
    const t = useTranslations("about");

    const stories = [
        { title: "", description: t("story.description") },
        { title: t("story.1.title"), description: t("story.1.description") },
        { title: t("story.2.title"), description: t("story.2.description") },
        { title: t("story.3.title"), description: t("story.3.description") },
        { title: t("story.4.title"), description: t("story.4.description") },
    ];

    return (
        <AboutContainer title={t("title")}>
            <section className="">
                <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-cal">
                    {t("story.title")}
                </h2>

                <div className="w-full max-w-7xl mx-auto mt-8 text-lg text-justify">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                        {stories.map((story, id) => (
                            <Card
                                key={id}
                                className="first:md:col-span-2 border-2 hover:border-primary group bg-primary text-primary-foreground hover:shadow-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                            >
                                <CardHeader className="">
                                    <CardTitle className="text-center">
                                        {story.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm lg:text-base text-center">
                                    {story.description}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section className="">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cal text-center uppercase">
                    Mission & Vision
                </h2>
                <div className="mt-4 md:mt-6 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Card className="border-2 hover:border-primary group bg-primary text-primary-foreground hover:shadow-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                        <CardHeader className="flex flex-col gap-4 items-center">
                            <Rocket className="size-16 text-center" />
                            <CardTitle className=" text-center">
                                MISSION
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            To provide reliable, affordable, and high-quality
                            handyman services to households and corporate sector
                            across Bangladesh. DFCL strive to make life easier
                            and more convenient for our customers by offering a
                            wide range of services, maintaining a team of
                            experienced and skilled professionals, and upholding
                            a commitment to customer satisfaction.
                        </CardContent>
                    </Card>
                    <Card className="border-2 hover:border-primary group bg-primary text-primary-foreground hover:shadow-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                        <CardHeader className="flex flex-col gap-4 items-center">
                            <Eye className="size-16 text-center" />
                            <CardTitle className=" text-center">
                                VISION
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            To provide reliable, affordable, and high-quality
                            handyman services to households and corporate sector
                            across Bangladesh. DFCL strive to make life easier
                            and more convenient for our customers by offering a
                            wide range of services, maintaining a team of
                            experienced and skilled professionals, and upholding
                            a commitment to customer satisfaction.
                        </CardContent>
                    </Card>
                </div>
            </section>
            <BOD />
            <Brands />
            <ApprovedBy />
        </AboutContainer>
    );
}
