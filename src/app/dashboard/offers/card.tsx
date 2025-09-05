"use client";
import { LoadingCircle } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { InitiatePayment } from "@/lib/actions/payment";
import { useState } from "react";

export default function SummaryCard({
    offer,
    type,
    comission = 0,
}: {
    offer: any;
    type: string;
    comission?: number;
}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const bonus =
        type == "recharge_offer"
            ? offer.percentage *
              (offer.amount - (offer.amount * (comission - 1)) / comission)
            : 0;
    const comment =
        type == "recharge_offer"
            ? "Recharge offer: " + bonus + " taka Bonus"
            : "Buy One Get One: " + offer.badge + " Package";
    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        const payment: any = await InitiatePayment(
            offer.amount,
            type,
            bonus,
            comment
        );
        if (payment?.error) {
            setError(payment.error as string);
        }
        setLoading(false);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="border-2 h-full hover:border-primary">
                    <CardHeader className="sr-only">
                        <CardTitle> {offer.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 lg:p-6 grid gap-2">
                        <div className="grid gap-2">
                            <div className="flex items-start justify-between">
                                <p className="text-start text-lg font-bold">
                                    {offer.title}
                                </p>
                                <Badge className="">
                                    {type == "recharge_offer"
                                        ? `৳${bonus} বোনাস`
                                        : `${offer.badge} Package Free`}
                                </Badge>
                            </div>
                            <p className="text-sm md:text-base">
                                {type == "recharge_offer"
                                    ? `৳${offer.amount} রিচার্জ করুন আর বোনাস পান ৳${bonus}`
                                    : offer.description}
                            </p>
                        </div>
                        <div className="mt-auto h-full flex items-end justify-between">
                            <div>
                                {type == "buy_one_get_one_offer" && (
                                    <Badge>
                                        {offer.badge} Validity: 365 Days
                                    </Badge>
                                )}
                            </div>
                            <p className="text-2xl md:text-2xl font-bold">
                                ৳{offer.amount}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{offer.title}</DialogTitle>
                    <DialogDescription>{offer.description}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    {error && (
                        <p className=" text-red-500 text-xs font-bold">
                            {error}
                        </p>
                    )}
                </div>

                <DialogFooter className="flex flex-row items-center justify-between md:justify-end gap-2">
                    <DialogClose
                        asChild
                        className="w-full md:w-auto"
                        disabled={loading}
                    >
                        <Button size="sm" variant="outline" disabled={loading}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={() => handleSubmit()}
                        size="sm"
                        className="w-full md:w-auto"
                        disabled={loading}
                    >
                        {loading ? (
                            <LoadingCircle />
                        ) : (
                            `Pay ৳${offer.amount} Now`
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
