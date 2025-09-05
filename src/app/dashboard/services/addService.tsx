"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { PlusCircle, SquareCheckBig } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function AddService() {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [serviceList, setServiceList] = useState([
        {
            id: 1,
            name: "AC Gas Filling R-32	1 Ton",
            added: true,
            selected: false,
        },
        {
            id: 2,
            name: "AC Gas Filling R-32	2 Ton",
            added: true,
            selected: false,
        },
        {
            id: 3,
            name: "AC Gas Filling R-32	5 Ton",
            added: false,
            selected: false,
        },
    ]);

    const toggleService = (id: number) => {
        setServiceList((prev) =>
            prev.map((service) =>
                service.id === id
                    ? { ...service, selected: !service.selected }
                    : service
            )
        );
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Service
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[450px] font-sans">
                <form action="">
                    <DialogHeader>
                        <DialogTitle>Add Service</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Select Category</Label>
                            <Select
                                required
                                onValueChange={(e) => setCategory(e)}
                            >
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>

                                        <SelectItem value="Dhaka">
                                            AC Repair Service
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        {category && (
                            <div className="grid gap-3">
                                <Label htmlFor="name">Select Subcategory</Label>
                                <Select
                                    required
                                    onValueChange={(e) => setSubcategory(e)}
                                >
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Subcategory
                                            </SelectLabel>

                                            <SelectItem value="Dhaka">
                                                AC Gas Filling R-32
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                        {subcategory && (
                            <div className="grid gap-3">
                                <Label htmlFor="name">
                                    Select Services to Add
                                </Label>
                                <div className="flex flex-wrap gap-3">
                                    {serviceList.map((service) => (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            key={service.id}
                                            type="button"
                                            onClick={() =>
                                                toggleService(service.id)
                                            }
                                            className={`${
                                                service.selected &&
                                                "bg-green-100 hover:bg-green-100 text-secondary-foreground"
                                            } rounded-md`}
                                            disabled={service.added}
                                        >
                                            {service.name}
                                            {service.selected && (
                                                <SquareCheckBig className="h-4 w-4 ml-2" />
                                            )}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="submit">Submit For Review</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
