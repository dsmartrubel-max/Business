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
import { Trash, X } from "lucide-react";

export function DeleteService({ service }: { service: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="icon" className="size-6">
                    <X className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Service</DialogTitle>
                    <DialogDescription>
                        Do you really want to delete this service{" "}
                        <strong>{service.name}</strong>?
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" size="sm">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button type="submit" variant="destructive" size="sm">
                        <Trash className="size-4 mr-2" />
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
