import AccountsSummary from "./accountSummary";
import OrderSummary from "./orderSummary";
import BannerSection from "./bannerSection";
import RechargeOffers from "./rechargeOffer";
import TopSP from "./topSP";
import ShopBanner from "./shopBanner";
import { getOrderSummary } from "@/lib/actions/summary";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";
import Link from "next/link";

export default async function DashboardHome() {
    const data: any = await getOrderSummary();
    const orderSummary = [
        {
            title: "Active",
            value: data.active || 0,
            href: "?status=active",
        },
        {
            title: "Today",
            value: data.today ?? 0,
            href: "?status=today",
        },
        {
            title: "Tomorrow",
            value: data.tomorrow ?? 0,
            href: "?status=tomorrow",
        },
        {
            title: "Processing",
            value: data.processing ?? 0,
            href: "?status=processing",
        },
        {
            title: "Bill Request",
            value: data.billreq ?? 0,
            href: "?status=billrequested",
        },
        {
            title: "Served",
            value: data.served ?? 0,
            href: "?status=served",
        },
        {
            title: "Completed",
            value: data.completed ?? 0,
            href: "?status=complete",
        },
        {
            title: "Warranty",
            value: data.warranty ?? 0,
            href: "?status=warranty",
        },
        {
            title: "Cancels",
            value: data.cancelled ?? 0,
            href: "?status=cancel",
        },
        {
            title: "Can. This Month",
            value: data.cancel_this_month ?? 0,
            href: "?status=cancel-this-month",
        },
        {
            title: "Complaint",
            value: 0,
            href: "?status=complaint",
        },
        {
            title: "All Orders",
            value: data.all_orders ?? 0,
            href: "",
        },
    ];

    const accountsSummary = [
        {
            title: "Today's Sales",
            value: "0",
        },
        {
            title: "This Week's Sales",
            value: "0",
        },
        {
            title: "This Month's Sales",
            value: "0",
        },
        {
            title: "Last Month's Sales",
            value: "0",
        },
        {
            title: "Last 6 Month's Sales",
            value: "0",
        },
        {
            title: "This Year's Sales",
            value: "0",
        },
        {
            title: "Last Year's Sales",
            value: "0",
        },
        {
            title: "Total's Sales",
            value: "0",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-6">
            <Link href="/dashboard/notice">
                <Alert className="flex gap-2" variant="destructive">
                    <Bell className="h-4 w-4" />
                    <AlertDescription className="font-bold">
                        একটি জরুরি নোটিস। এখানে ক্লিক করুন।
                    </AlertDescription>
                </Alert>
            </Link>

            <OrderSummary summary={orderSummary} />
            <BannerSection />
            <AccountsSummary summary={accountsSummary} />
            <ShopBanner />
            <RechargeOffers />
            <TopSP />
        </div>
    );
}
