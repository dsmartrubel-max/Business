import { redirect } from "next/navigation";
import { MenuContext } from "./navigation";
import { spInfo } from "@/lib/actions/sp";
import AssignedOrder from "@/components/reusable/dashboard/assignedOrder";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    title: "DFCL Business | dSmart Self-Business Platform",
    description:
        "DFCL Business. dSmart Self-Business Platform. A Product of dSmart Finger Communication Ltd. DFCL.",
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

export default async function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = await spInfo();
    if (!session.name) {
        redirect("/login");
    }

    // const session = {
    //     id: 1,
    //     name: "DFCL",
    // };

    return (
        <MenuContext session={session}>
            {children}
            <AssignedOrder />
        </MenuContext>
    );
}
