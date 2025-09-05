import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
    Blocks,
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Phone,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "@/app/(auth)/logout";

export default function TopHeader({ session }: { session: any }) {
    const t = useTranslations("auth");

    return (
        <div className="z-50 w-full bg-primary text-primary-foreground py-1">
            <div className=" w-full max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4 gap-2">
                <div className="flex items-center">
                    <LocaleSwitcher />
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                    {session.name ? (
                        <DropdownUserMenu session={session} />
                    ) : (
                        <>
                            <Link href="/login" className="w-full lg:w-auto">
                                <Button
                                    className="h-6 w-full lg:w-auto font-bold text-xs md:text-sm"
                                    variant="ghost"
                                    size="sm"
                                >
                                    {t("login")}
                                </Button>
                            </Link>
                            <Link
                                href="/signup"
                                className="hidden md:block w-full lg:w-auto"
                            >
                                <Button
                                    className="h-6 w-full lg:w-auto font-bold text-xs md:text-sm"
                                    variant="ghost"
                                    size="sm"
                                >
                                    {t("register")}
                                </Button>
                            </Link>
                        </>
                    )}
                    <Link
                        href="tel:09613828000"
                        className="md:hidden flex gap-1 items-center text-xs  font-bold font-cal"
                    >
                        <Phone size={12} />
                        <span>09613828000</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function DropdownUserMenu({ session }: { session: any }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="rounded-full size-8 border-2 border-white flex flex-col items-center justify-center overflow-clip">
                    <Avatar className="size-8">
                        <AvatarImage
                            src={`https://admin.dfclbd.com/media/resource_images/${session.image}`}
                        />
                        <AvatarFallback>{session.name[0]}</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" side="bottom" align="end">
                <DropdownMenuLabel>{session.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        href="/dashboard"
                        className="w-full flex items-center"
                    >
                        <Blocks className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </Link>
                </DropdownMenuItem>

                <Logout />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
