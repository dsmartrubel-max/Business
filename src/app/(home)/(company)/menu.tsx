"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AboutMenu() {
    const pathname = usePathname();
    const Links = [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Terms",
            href: "/terms-of-use",
        },
        {
            name: "Privacy",
            href: "/privacy-policy",
        },
        {
            name: "Code",
            href: "/code-of-conduct",
        },

        {
            name: "Copyright",
            href: "/copyright-policy",
        },
        {
            name: "Trademark",
            href: "/trademark-policy",
        },
        {
            name: "Payment",
            href: "/payment-methods",
        },
        {
            name: "Investors",
            href: "/investors",
        },

        {
            name: "Contact",
            href: "/contact",
        },
        {
            name: "FAQ",
            href: "/faq",
        },
    ];
    return (
        <div className="-translate-y-1/2 w-full mx-auto flex ">
            <div className="overflow-x-scroll md:overflow-hidden w-auto mx-auto border-2 shadow rounded-lg bg-white inline-flex p-1 border-primary">
                {Links.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className="font-bold"
                    >
                        <Button
                            variant={`${
                                link.href == pathname ? "default" : "ghost"
                            }`}
                            className={`${
                                link.href != pathname &&
                                "hover:bg-secondary hover:text-secondary-foreground"
                            }`}
                        >
                            {link.name}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
