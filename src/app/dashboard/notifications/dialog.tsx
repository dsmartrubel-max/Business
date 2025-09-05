import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import Link from "next/link";
import { getNotifications } from "./data";
import ComingSoon from "@/components/reusable/dashboard/comingSoon";

export function NotificationDialog() {
    // const data = await getNotifications();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="ml-2 size-8">
                    <Bell className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-sans w-96" align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                {/*{data.map((item, idx) => (
                    <div key="idx">
                        <DropdownMenuSeparator />
                        <NotificationItem item={item} />
                    </div>
                ))}*/}
                <ComingSoon />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function NotificationItem({ item }: { item: any }) {
    return (
        <Link
            href={item.href}
            className={`${
                !item.read && "bg-secondary text-secondary-foreground"
            } rounded-lg shadow md:shadow-none p-3 flex gap-3 items-center border-primary border-2 md:border-0`}
        >
            <Bell className="size-5" />
            <div className="grid gap-1">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs">{item.description}</p>
            </div>
        </Link>
    );
}
