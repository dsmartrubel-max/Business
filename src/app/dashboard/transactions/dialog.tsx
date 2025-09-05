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
import { Transaction } from "./page";
import { Button } from "@/components/ui/button";

export default function DetailDialog({ data }: { data: Transaction }) {
    const items: { key: string; value: string | number }[] = [];
    Object.keys(data).forEach((key) => {
        const value = data[key as keyof Transaction];
        items.push({
            key: key
                .split(/(?=[A-Z])/)
                .map(
                    (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                )
                .join(" "),
            value: value,
        });
    });
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Details
                </Button>
            </DialogTrigger>
            <DialogContent className=" max-w-[400px] sm:max-w-[425px] font-sans">
                <DialogHeader>
                    <DialogTitle>Transaction #{data.id}</DialogTitle>
                    <DialogDescription>
                        View details of transaction #{data.id}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid text-sm even:bg-secondary odd:bg-white divide-y">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="even:bg-secondary odd:bg-white py-2 px-4 grid grid-cols-[minmax(125px,_1fr)_2fr] items-center gap-2"
                        >
                            <div className="text-muted-foreground">
                                {item.key}
                            </div>
                            <div>{item.value}</div>
                        </div>
                    ))}
                </div>
                <DialogFooter className="items-end">
                    <DialogClose>
                        <Button>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
