import { Button } from "@/components/ui/button";
import {
    Bell,
    Home,
    Menu,
    Building,
    Box,
    Map,
    FolderCog,
    User,
    CreditCard,
    UserCheck,
    Blocks,
    Cog,
    Logs,
    LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomBar() {
    const pathname = usePathname();
    const navItems = [
        {
            icon: <Box className="size-6" />,
            name: "Orders",
            href: "/dashboard/orders",
        },
        {
            icon: <Blocks className="size-6" />,
            name: "WPackage",
            href: "/dashboard/package",
        },

        {
            icon: <Home className="size-6" />,
            name: "Dashboard",
            href: "/dashboard",
        },
        {
            icon: <CreditCard className="size-6" />,
            name: "My Transactions",
            href: "/dashboard/transactions",
        },
        {
            icon: <Bell className="size-6" />,
            name: "Notifications",
            href: "/dashboard/notifications",
        },
    ];
    return (
        <footer className="bg-primary text-primary border-t sticky bottom-0 px-4 py-1 grid grid-cols-5 gap-2 sm:hidden">
            {navItems.map((item, idx) => (
                <Link key={idx} href={item.href} className="w-full">
                    <Button
                        size="icon"
                        variant="default"
                        className={`w-full h-12 flex justify-center active:bg-white active:text-primary ${
                            pathname == item.href
                                ? "text-primary-foreground"
                                : "bg-primary text-muted-foreground"
                        }`}
                    >
                        {item.icon}
                    </Button>
                </Link>
            ))}
        </footer>
    );
}
