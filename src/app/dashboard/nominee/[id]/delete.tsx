"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Trash } from "lucide-react";

export function DeleteNominee({ nominee }: { nominee: any }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = () => {
        setError("");
        setLoading(true);
        setTimeout(() => {
            setError("Failed to delete nominee");
            setLoading(false);
        }, 2000);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="destructive">
                    <Trash className="h-5 w-5 mr-2" />
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="font-sans max-w-[400px] sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Nominee</DialogTitle>
                </DialogHeader>
                <div className="text-sm">
                    Are you sure you want to delete nominee{" "}
                    <strong>{nominee.name}</strong>?
                </div>
                {error && (
                    <DialogDescription>
                        <div className="text-accent">{error}</div>
                    </DialogDescription>
                )}
                <DialogFooter className=" gap-4">
                    <DialogClose className="w-full sm:w-auto">
                        <Button
                            type="button"
                            variant="outline"
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="button"
                        variant="destructive"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {loading ? (
                            "Deleting..."
                        ) : (
                            <>
                                <Trash className="size-5 mr-3" />
                                <span>Delete</span>
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
