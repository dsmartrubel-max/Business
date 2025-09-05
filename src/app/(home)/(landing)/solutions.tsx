import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
    BriefcaseIcon,
    Contact,
    Monitor,
    MonitorCog,
    MonitorOffIcon,
    PieChartIcon,
    ShieldIcon,
    Users,
    WalletIcon,
} from "lucide-react";
export default function SolutionSection() {
    const t = useTranslations("landing.solutions");
    const items = [
        {
            name: t("1.title"),
            icon: "/images/arts/discount.svg",
            href: "#",
        },
        {
            name: t("2.title"),
            icon: "images/arts/active_support.svg",
            href: "#",
        },
        {
            name: t("3.title"),
            icon: "/images/arts/online_payments.svg",
            href: "#",
        },
        {
            name: t("4.title"),
            icon: "/images/arts/chatbot.svg",
            href: "#",
        },
    ];

    return (
        <>
            <div className="py-8 md:py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6 md:gap-12">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
                    {t("title")}
                </h1>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {items.map((item) => (
                        <Card
                            key={item.name}
                            className="hover:shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <CardContent className="h-full flex flex-col items-center gap-5 px-6 md:px-12 pt-4 pb-8 text-center">
                                <div className="flex flex-col items-center justify-center aspect-square">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={500}
                                        height={400}
                                        className="w-full md:w-4/5"
                                    />
                                </div>
                                <p className="text-xl md:text-3xl font-bold">
                                    {item.name}
                                </p>
                                <Link href={item.href} className="mt-auto">
                                    <Button size="lg">{t("button")}</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
