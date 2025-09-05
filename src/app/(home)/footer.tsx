import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export default function Footer() {
    const t = useTranslations("navigation.footer");
    const Links = [
        {
            name: t("about"),
            href: "/about",
        },
        {
            name: t("blog"),
            href: "/blog",
        },

        {
            name: t("terms"),
            href: "/terms-of-use",
        },
        {
            name: t("privacy"),
            href: "/privacy-policy",
        },
        {
            name: t("code"),
            href: "/code-of-conduct",
        },

        {
            name: t("copyright"),
            href: "/copyright-policy",
        },
        {
            name: t("trademark"),
            href: "/trademark-policy",
        },
        {
            name: t("payment"),
            href: "/payment-methods",
        },
        {
            name: t("investors"),
            href: "/investors",
        },

        {
            name: t("contact"),
            href: "/contact",
        },
        {
            name: t("faq"),
            href: "/faq",
        },
    ];
    const authT = useTranslations("auth");
    return (
        <footer className="text-sm md:text-base bg-primary text-primary-foreground w-full font-bold">
            <div className="px-8 w-full max-w-7xl mx-auto py-2 md:py-3 flex flex-col gap-3">
                <div className=" w-full mx-auto flex ">
                    <div className=" md:overflow-hidden w-auto mx-auto grid grid-cols-3 sm:grid-cols-6 lg:inline-flex p-1 border-primary">
                        {Links.map((link) => (
                            <Link
                                href={link.href}
                                key={link.href}
                                className="font-bold"
                            >
                                <Button
                                    variant="ghost"
                                    className="hover:bg-secondary hover:text-secondary-foreground"
                                >
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="h-0.5 bg-primary-foreground"></div>
                <div className="py-0.5 w-full flex items-center justify-center text-xs md:text-sm 2xl:text-base text-center">
                    <div>
                        &copy; dSmart Finger Communication Ltd. All Rights
                        Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
