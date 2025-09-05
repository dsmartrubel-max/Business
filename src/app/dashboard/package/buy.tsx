"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { InitiatePayment } from "@/lib/actions/payment";
import { LoadingCircle } from "@/components/icons";

export default function BuyPackage({
    item,
    currentPackage,
}: {
    item: any;
    currentPackage: boolean;
}) {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            setError("");

            const payment: any = await InitiatePayment(
                item.package_price,
                "buy_package"
            );
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
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    className="w-full"
                    variant={
                        currentPackage || item.packid == 2
                            ? "outline"
                            : "default"
                    }
                    disabled={currentPackage || item.packid == 2}
                >
                    {currentPackage
                        ? "Current Package"
                        : item.packid == 2
                        ? "New SP Only"
                        : "Buy Now"}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[425px] font-sans">
                <DialogHeader>
                    <DialogTitle>Buy Package: {item.package_name}</DialogTitle>
                    <DialogDescription>
                        {item.package_description}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="terms"
                            checked={checked}
                            onCheckedChange={(value) =>
                                setChecked((prev) => !prev)
                            }
                            className={`${
                                !checked && "border-red-500 border-2"
                            }`}
                        />
                        <Label htmlFor="terms">
                            Accept{" "}
                            <Link href="/terms-of-use" className="underline">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    {error && (
                        <p className=" text-red-500 text-xs font-bold">
                            {error}
                        </p>
                    )}
                </div>
                <DialogFooter className="flex flex-row items-center justify-between md:justify-end gap-4">
                    <DialogClose className="w-full">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        size="sm"
                        className="w-full"
                        disabled={!checked || loading}
                        onClick={handleSubmit}
                    >
                        {loading ? <LoadingCircle /> : "Pay Now"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
