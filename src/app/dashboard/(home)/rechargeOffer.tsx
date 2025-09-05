import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RechargeOffers() {
    const summary = [
        {
            title: "Today",
            value: "0",
        },
        {
            title: "This Week",
            value: "0",
        },
        {
            title: "Next 15 Days",
            value: "0",
        },
        {
            title: "Next 30 Days",
            value: "0",
        },
    ];
    return (
        <div className="grid gap-4">
            <div>
                <Badge className="font-cal text-xl md:text-2xl lg:text-3xl border-2 border-accent">
                    Recharge Target
                </Badge>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4 ">
                {summary.map((item, index) => (
                    <Card
                        key={index}
                        className="border-2 hover:border-primary h-full"
                    >
                        <CardContent className="p-2  md:p-4 lg:p-6 flex flex-col items-center md:items-center gap-2">
                            <p className="font-sans text-sm text-center md:text-start md:text-base font-semibold">
                                {item.title}
                            </p>
                            <p className="text-lg md:text-2xl font-bold ">
                                {item.value}
                                <span className="text-xl md:text-3xl">৳</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
