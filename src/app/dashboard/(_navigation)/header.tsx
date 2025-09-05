import { AddBalancePlusButton } from "@/components/reusable/dashboard/paymentDialog";
import { NotificationDialog } from "../notifications/dialog";
import MobileNav from "./mobileNav";
import { UserMenu } from "./userMenu";
import { OnlineSwitch } from "./onlineSwitch";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header({
    session,
    toggler,
}: {
    session: {
        balance: number;
        company_name: string;
        image: string;
        is_online: "ONLINE" | "OFFLINE";
        name: string;
        package_name: string;
        pkg_start_date: any;
        status: "ACTIVE" | "INACTIVE" | "CLOSED";
        tid: number;
        verification: "VERIFIED" | "UNVERIFIED";
    };
    toggler: any;
}) {
    return (
        <header className="mx-0 w-full max-w-full z-50 sticky top-0 flex md:flex-row-reverse py-3 px-2 md:px-4 md:py-4 items-center justify-start md:justify-between  gap-2 md:gap-4 border-b bg-primary lg:h-[60px] lg:pr-6">
            <UserMenu session={session} />
            <div className="w-full max-w-full flex flex-col items-start md:flex-row md:items-center gap-2">
                <div className="hidden md:block">
                    <Button size="icon" onClick={() => toggler()}>
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                <p className="w-full max-w-[25ch] md:max-w-full md:w-auto text-sm md:text-xl font-cal text-white uppercase truncate">
                    {session.company_name}
                </p>

                <div className="md:ml-auto flex items-center justify-start md:justify-between gap-2">
                    <OnlineSwitch status={session.is_online} />

                    <AddBalancePlusButton
                        className="md:ml-auto"
                        balance={session.balance ? session.balance : 0}
                        size="sm"
                    />
                </div>
                <div className="hidden md:inline-flex">
                    <NotificationDialog />
                </div>
            </div>
            <MobileNav />
        </header>
    );
}
