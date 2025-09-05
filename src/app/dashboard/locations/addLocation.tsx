"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BoxSelect, PlusCircle, SquareCheckBig } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import data from "./page";

export function AddLocation() {
    const [division, setDivision] = useState("");
    const [district, setDistrict] = useState("");
    const [areaList, setAreaList] = useState([
        {
            id: 1,
            name: "Gulshan",
            added: true,
            selected: false,
        },
        {
            id: 2,
            name: "Banani",
            added: true,
            selected: false,
        },
        {
            id: 3,
            name: "Uttara",
            added: false,
            selected: false,
        },
    ]);

    const toggleArea = (id: number) => {
        setAreaList((prev) =>
            prev.map((area) =>
                area.id === id ? { ...area, selected: !area.selected } : area
            )
        );
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Location
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[450px] font-sans">
                <form action="">
                    <DialogHeader>
                        <DialogTitle>Add Location</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Select Division</Label>
                            <Select
                                required
                                onValueChange={(e) => setDivision(e)}
                            >
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Division" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Division</SelectLabel>

                                        <SelectItem value="Dhaka">
                                            Dhaka
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        {division && (
                            <div className="grid gap-3">
                                <Label htmlFor="name">Select District</Label>
                                <Select
                                    required
                                    onValueChange={(e) => setDistrict(e)}
                                >
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select Division" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>District</SelectLabel>

                                            <SelectItem value="Dhaka">
                                                Dhaka
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                        {district && (
                            <div className="grid gap-3">
                                <Label htmlFor="name">
                                    Select Areas to Add
                                </Label>
                                <div className="flex flex-wrap gap-3">
                                    {areaList.map((area) => (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            key={area.id}
                                            type="button"
                                            onClick={() => toggleArea(area.id)}
                                            className={`${
                                                area.selected &&
                                                "bg-green-100 hover:bg-green-100 text-secondary-foreground"
                                            } rounded-md`}
                                            disabled={area.added}
                                        >
                                            {area.name}
                                            {area.selected && (
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
