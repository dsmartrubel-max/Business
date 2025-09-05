"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Suspense, useState, useTransition } from "react";

export function StatusFilter({
    status,
    setStatus,
}: {
    status: string | null;
    setStatus: any;
}) {
    const [isPending, startTransition] = useTransition();
    const [statusList, setStatusList] = useState([
        { name: "All", value: "all" },
        { name: "Active", value: "active" },
        { name: "Today", value: "today" },
        { name: "Tomorrow", value: "tomorrow" },
        { name: "Processing", value: "processing" },
        { name: "Bill Request", value: "billrequested" },
        { name: "Completed", value: "complete" },
        { name: "Cancelled", value: "cancel" },
        { name: "Cancelled This Month", value: "cancel-this-month" },
        { name: "Served", value: "served" },
        { name: "Warranty", value: "warranty" },
    ]);

    const handleStatusChange = (value: string) => {
        const params = new URLSearchParams(window.location.search);
        if (value === "all") {
            setStatus(null);
            params.delete("status");
        } else {
            setStatus(value);
            params.set("status", value);
        }
        if (params.get("page")) params.delete("page");
        startTransition(() => {
            window.history.pushState(
                {},
                "",
                `${window.location.pathname}?${params}`
            );
        });
    };

    return (
        <Suspense fallback={"Loading"}>
            <Select
                onValueChange={(value) => handleStatusChange(value)}
                defaultValue={status || "all"}
            >
                <SelectTrigger className="w-[150px] h-9">
                    <SelectValue placeholder="Status Filter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup
                        className="font-sans"
                        defaultValue={status ? status : "all"}
                    >
                        <SelectLabel>Status</SelectLabel>
                        {statusList.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                                {status.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Suspense>
    );
}
