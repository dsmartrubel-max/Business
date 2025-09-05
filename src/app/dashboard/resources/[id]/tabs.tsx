"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResourceTabs({ resource }: { resource: any }) {
    const pathname = usePathname();
    const tabs = [
        {
            name: "Summary",
            href: "/dashboard/resources/" + resource.id,
        },
        {
            name: "Orders",
            href: "/dashboard/resources/" + resource.id + "/orders",
        },
        {
            name: "Profile",
            href: "/dashboard/resources/" + resource.id + "/profile",
        },
    ];
    return (
        <div>
            <ul className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
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
