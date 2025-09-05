import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import LandingHeader from "./topHeader";
import { Whatsapp } from "@/components/icons";
// export default function Header() {

export function DesktopHeader() {
    const t = useTranslations("navigation");
    const links = [
        { name: t("header.home"), href: "/" },
        { name: t("header.about"), href: "/about" },

        { name: t("header.services"), href: "/services" },
        { name: t("header.contact"), href: "/contact" },
    ];
    return (
        <nav className="z-50 sticky top-0 bg-white text-secondary-foreground w-full font-bold shadow-lg">
            <div className=" w-full max-w-7xl mx-auto  px-2 md:px-4 lg:px-6 flex items-center justify-between gap-4 py-1">
                {/* Logo section  */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="h-10 md:h-12 lg:h-14  w-auto font-cal text-2xl lg:text-4xl font-bold"
                    >
                        <Image
                            src="/images/logo/dfcl/business.png"
                            alt="DFCL Business"
                            width={150}
                            height={80}
                            className="size-full object-contain object-center"
                        />
                        <span className="sr-only">DFCL Business</span>
                    </Link>
                </div>
                {/* Navigation links */}
                {/* <div className="hidden lg:block">
                    <NavLinks links={links} />
                </div> */}

                <Link
                    href="tel:09613828000"
                    className="hidden md:flex gap-2 items-center text-lg md:text-xl font-bold font-cal"
                >
                    <Phone />
                    <span>09613828000</span>
                </Link>
            </div>
        </nav>
    );
}

export function NavLinks({ links }: { links: any[] }) {
    return (
        <div className="flex lg:items-center flex-col lg:flex-row gap-2">
            {links.map((item, index) => (
                <Link key={index} href={item.href} className="">
                    <Button
                        variant="ghost"
                        className="w-full hover:bg-primary hover:text-primary-foreground font-semibold"
                    >
                        {item.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
}

export function MobileMenu({ links }: { links: any[] }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="font-cal text-2xl">
                        DFCL Business
                    </SheetTitle>
                </SheetHeader>
                <div className="grid gap-6 py-3">
                    <div className="flex flex-col items-start lg:flex-row gap-2">
                        {links.map((item, index) => (
                            <SheetClose key={index} asChild>
                                <Link href={item.href} className="w-full">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            </SheetClose>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
