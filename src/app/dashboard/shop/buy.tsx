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

export default function BuyProduct({ item }: { item: any }) {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setError("Something went wrong");
        }, 2000);
        setLoading(false);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="w-full">
                    View
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[425px] font-sans">
                <DialogHeader>
                    <DialogTitle>Buy {item.name}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
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
