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
import { useTranslations } from "next-intl";
export default function Offerings() {
    const t = useTranslations("landing.offerings");
    const items = [
        {
            text: t("1.title"),
            details: t("1.description"),
            icon: <Monitor className="w-6 h-6 text-primary-foreground" />,
            href: "#",
        },
        {
            text: t("2.title"),
            details: t("2.description"),
            icon: <Contact className="w-6 h-6 text-primary-foreground" />,
            href: "#",
        },
        {
            text: t("3.title"),
            details: t("3.description"),
            icon: <Users className="w-6 h-6 text-primary-foreground" />,
            href: "#",
        },
        {
            text: t("4.title"),
            details: t("4.description"),
            icon: <MonitorCog className="w-6 h-6 text-primary-foreground" />,
            href: "#",
        },
    ];
    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-muted">
            <div className="container px-4 md:px-6 grid gap-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        {t("title")}
                    </h2>
                </div>
                <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-4">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center gap-4 text-center"
                        >
                            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold">
                                {item.text}
                            </h3>
                            <p className="mt-auto text-md md:text-lg text-muted-foreground">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
