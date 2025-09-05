import Footer from "./footer";
import { DesktopHeader, MobileMenu, NavLinks } from "./header";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import TopHeader from "./topHeader";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Whatsapp } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { spInfo } from "@/lib/actions/sp";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default async function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session: any = await spInfo();
    // const session = {};

    return (
        <main className="w-full bg-slate-50">
            <TopHeader session={session} />
            <DesktopHeader />
            {children}
            <Footer />
        </main>
    );
}
