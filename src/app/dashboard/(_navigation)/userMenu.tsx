import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Blocks } from "lucide-react";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logout from "@/app/(auth)/logout";
export function UserMenu({ session }: { session: any }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                >
                    <Avatar className="border-2 border-accent">
                        <AvatarImage
                            src={`https://admin.dfclbd.com/media/resource_images/${session.image}`}
                            alt={session.name}
                        />
                        <AvatarFallback className="bg-white">
                            {session.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="border-2 border-primary"
            >
                <DropdownMenuLabel>
                    {session.name}
                    <br />
                    SP Id: {session.tid}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link
                    href="/dashboard/settings/activity"
                    className="cursor-pointer"
                >
                    <DropdownMenuItem>Activity Log</DropdownMenuItem>
                </Link>
                <Link href="/dashboard/user" className="cursor-pointer">
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                </Link>
                <Link href="/dashboard/settings" className="cursor-pointer">
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <Logout />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
