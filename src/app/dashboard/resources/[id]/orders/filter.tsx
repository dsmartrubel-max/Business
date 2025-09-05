"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ListFilter } from "lucide-react";
import { useState } from "react";

export function StatusFilter() {
    const [statusList, setStatusList] = useState([
        { name: "All", value: "all" },
        { name: "Assigned", value: "assigned" },
        { name: "Active", value: "active" },
        { name: "Bill Request", value: "billrequest" },
        { name: "Served", value: "served" },
        { name: "Warranty", value: "warranty" },
    ]);

    return (
        <Select>
            <SelectTrigger className="w-[150px] h-9">
                <SelectValue placeholder="Status Filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="font-sans">
                    <SelectLabel>Status</SelectLabel>
                    {statusList.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                            {status.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
