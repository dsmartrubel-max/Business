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

export function DeleteResource({ resource }: { resource: any }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = () => {
        setError("");
        setLoading(true);
        setTimeout(() => {
            setError("Failed to delete resource");
            setLoading(false);
        }, 2000);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                    <Trash className="size-5 mr-2" /> Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[425px] font-sans">
                <DialogHeader>
                    <DialogTitle>Delete Resource</DialogTitle>
                </DialogHeader>
                <div className="text-sm">
                    Are you sure you want to delete resource{" "}
                    <strong>{resource.name}</strong>?
                </div>
                {error && (
                    <DialogDescription>
                        <div className="text-red-600">{error}</div>
                    </DialogDescription>
                )}
                <DialogFooter className="flex flex-row gap-2">
                    <DialogClose className="w-full md:w-auto">
                        <Button
                            type="button"
                            variant="outline"
                            disabled={loading}
                            className="w-full md:w-auto"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="button"
                        variant="destructive"
                        disabled={loading}
                        onClick={handleSubmit}
                        className="w-full md:w-auto"
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
