"use client";
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
export default function Logout() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        fetch("/api/logout").then((res) => {
            if (res.ok) {
                window.location.href = "/login";
            }
        });
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-full justify-start"
                >
                    <LogOut className="size-4 mr-2" />
                    Logout
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Logout</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to logout?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-row items-center gap-2 md:gap-3">
                    <DialogClose asChild className="w-full md:w-auto">
                        <Button variant="outline" size="sm">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        type="button"
                        size="sm"
                        className="w-full md:w-auto"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Logging out..." : "Logout"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
