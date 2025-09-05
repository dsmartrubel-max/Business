"use client";
export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid gap-4 md:gap-6 w-full max-w-5xl mx-auto">
            <h1 className="font-cal text-xl md:text-2xl lg:text-3xl">
                Settings
            </h1>
            <SettingTabs />
            {children}
        </div>
    );
}

import Link from "next/link";
import { usePathname } from "next/navigation";
function SettingTabs() {
    const pathname = usePathname();
    const tabs = [
        {
            name: "Settings",
            href: "/dashboard/settings",
        },
        {
            name: "Activity Log",
            href: "/dashboard/settings/activity",
        },

        {
            name: "Password",
            href: "/dashboard/settings/password",
        },
    ];
    return (
        <div>
            <ul className="border inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                {tabs.map((tab) => (
                    <li
                        key={tab.name}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                        data-state={tab.href === pathname ? "active" : ""}
                    >
                        <Link href={tab.href} className="text-sm font-sans">
                            {tab.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
