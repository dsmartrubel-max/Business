"use client";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { LoadingCircle } from "@/components/icons";
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { InitiatePayment } from "@/lib/actions/payment";

export default function AddBalanceCard() {
    const [loading, setLoading] = useState(false);
    const [rechargeAmount, setRechargeAmount] = useState(0);
    const [error, setError] = useState("");
    const amounts = [
        { id: 1, amount: 2500 },
        { id: 2, amount: 3000 },
        { id: 3, amount: 3500 },
        { id: 4, amount: 4000 },
    ];
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            setError("");
            if (rechargeAmount < 10) {
                setError("Amount can't be less than 10 taka");
                setLoading(false);
                return;
            }
            const payment: any = await InitiatePayment(rechargeAmount);
            if (payment?.error) {
                setError(payment.error as string);
                setLoading(false);
            }
        } catch (e) {
            setError("Something went wrong");
            setLoading(false);
        }
    };

    return (
        <div>
            <CardContent className="pt-6">
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name">
                            Choose from the list or write amount.
                        </Label>

                        <div className="flex flex-wrap gap-3 md:gap-6">
                            {amounts.map((amount) => (
                                <Button
                                    key={amount.id}
                                    variant="outline"
                                    onClick={() =>
                                        setRechargeAmount(amount.amount)
                                    }
                                >
                                    {amount.amount}
                                </Button>
                            ))}
                        </div>
                        <Input
                            id="name"
                            type="number"
                            className="w-full"
                            placeholder="Enter amount"
                            min={500}
                            step={100}
                            value={rechargeAmount}
                            onChange={(e) =>
                                setRechargeAmount(parseInt(e.target.value))
                            }
                        />
                    </div>
                    {error && (
                        <p className=" text-red-500 text-xs font-bold">
                            {error}
                        </p>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full"
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {loading ? <LoadingCircle /> : "Pay Now"}
                </Button>
            </CardFooter>
        </div>
    );
}

function DialogCard({ children }: { children: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="w-full sm:max-w-[500px] font-sans p-0">
                <DialogHeader className="pt-6 pb-0">
                    <DialogTitle className="px-6 text-2xl font-cal">
                        Add Balance
                    </DialogTitle>
                </DialogHeader>
                <AddBalanceCard />
            </DialogContent>
        </Dialog>
    );
}

export function AddBalancePlusButton({
    balance,
    variant,
    className,
    size,
}: {
    balance: number;
    variant?: string;
    className?: string;
    size?: string;
}) {
    return (
        <DialogCard>
            <div
                className={`cursor-pointer text-xs flex items-center pl-2 font-bold ${
                    variant == "default" || !variant
                        ? "bg-primary rounded-full  text-primary-foreground border-2 border-white"
                        : variant == "outline"
                        ? "border-2 rounded-full border-primary"
                        : ""
                }
                ${
                    size == "sm"
                        ? "text-sm md:text-md gap-1 md:gap-2"
                        : "text-md gap-2"
                }        
                
                ${className}`}
            >
                {balance}
                <span className="text-md">৳</span>
                <PlusCircle
                    className={`${size == "sm" ? "size-5 md:size-auto" : ""}`}
                />
            </div>
        </DialogCard>
    );
}
