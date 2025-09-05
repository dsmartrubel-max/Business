"use client";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { swithOnlineStatus } from "@/lib/actions/sp";

export function OnlineSwitch({ status }: { status: "ONLINE" | "OFFLINE" }) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (value: string) => {
        setLoading(true);
        try {
            const res = await swithOnlineStatus(value);
            if (res.error) {
                throw new Error(res.error);
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };
    return (
        <Select
            defaultValue={status}
            onValueChange={(value) => handleSubmit(value)}
            disabled={loading}
        >
            <SelectTrigger className="w-auto h-6 text-xs font-bold">
                <SelectValue placeholder="ONLINE" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>ONLINE</SelectLabel>
                    <SelectItem value="ONLINE">ONLINE</SelectItem>
                    <SelectItem value="OFFLINE">OFFLINE</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
