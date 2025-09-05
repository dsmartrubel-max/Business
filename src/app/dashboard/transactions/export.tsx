import { Button } from "@/components/ui/button";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { File, AlertTriangle } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ExportDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="default" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Download
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[425px] font-sans">
                <DialogHeader>
                    <DialogTitle>Download Transaction Report</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Sorry!</AlertTitle>
                        <AlertDescription>
                            Report Download is not available at the moment.
                        </AlertDescription>
                    </Alert>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button type="submit">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
