"use client";
import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateStatus } from "@/lib/actions/order";
import { set } from "date-fns";
import { LoadingCircle } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { File } from "lucide-react";

export default function ChangeStatus({ order }: { order: any }) {
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState(order.status.toLowerCase());
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        setLoading(true);
        try {
            const updateResult = await updateStatus(order.id, e);
            if (updateResult) {
                setStatus(e);
            } else {
                setStatus(order.status.toLowerCase());
            }
        } catch (e) {
            console.log(e);
            setStatus(order.status.toLowerCase());
        }
        setLoading(false);
        window.location.reload();
    };
    if (status == "cancel") return null;
    if (status == "complete") {
        return null;
        // return (
        //     <Button size="sm" className="h-8">
        //         <File className="size-4 mr-2" />
        //         Download Invoice
        //     </Button>
        // );
    }
    if (status == "billrequested")
        return (
            <Button className="h-8 w-full md:w-auto" disabled>
                Please Wait
            </Button>
        );

    return (
        <Select onValueChange={handleSubmit} disabled={loading}>
            <SelectTrigger className="h-8 w-full md:w-auto gap-4">
                <span className="flex items-center gap-2">
                    <SelectValue placeholder="Change Status" />
                    {loading && <LoadingCircle />}
                </span>
            </SelectTrigger>
            <SelectContent className="font-sans">
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="active" disabled>
                        Active
                    </SelectItem>
                    <SelectItem
                        value="processing"
                        disabled={status != "active"}
                    >
                        Processing
                    </SelectItem>
                    <SelectItem
                        value="billrequested"
                        disabled={status != "processing"}
                    >
                        Bill Request
                    </SelectItem>
                    <SelectItem
                        value="served"
                        disabled={status != "billrequested"}
                    >
                        Served
                    </SelectItem>
                    <SelectItem value="complete" disabled={status != "served"}>
                        Complete
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
