import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Providers from "./providers";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import localFont from "next/font/local";
import { Hind_Siliguri } from "next/font/google";

const CalSans = localFont({
    src: "../../public/fonts/CalSans-SemiBold.woff2",
    variable: "--font-cal-sans",
});

const hindshiliguri = Hind_Siliguri({
    weight: ["400", "700"],
    subsets: ["bengali"],
    variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
    title: {
        template: "%s | DFCL Business | business.dfclbd.com",
        default: "DFCL Business | dSmart Self-Business Platform",
    },
    description:
        "DFCL Business is a leading online platform designed to empower businesses in Bangladesh. As a product of dSmart Finger Communication Ltd., our platform offers a comprehensive suite of tools and services to help entrepreneurs grow their ventures efficiently. Discover innovative solutions for self-business management, online transactions, and more.",
    metadataBase: new URL("https://business.dfclbd.com"),
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/en-US",
            "bn-BD": "/bn-BD",
        },
    },
    openGraph: {
        images: "/opengraph-image.jpg",
    },

};
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html lang={locale != null ? locale : "en"} className="scroll-smooth">
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} ${
                    CalSans.variable
                } ${hindshiliguri.variable} ${
                    locale == "bn" ? "font-hind" : "font-sans"
                }`}
            >
                <Providers>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
}
