"use client";
import * as React from "react";
import Image from "next/image";
import { useTransition } from "react";
import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Switcher({
    defaultValue,
    items,
    label,
}: {
    defaultValue: string;
    items: Array<{ value: string; label: string; flag: any }>;
    label: string;
}) {
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="h-8 bg-primary text-primary-foreground border-0">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="p-0">
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            <div className="p-0 flex items-center justify-start gap-3 pr-2">
                                <Image
                                    src={item.flag}
                                    width="30"
                                    height="18"
                                    alt="Flag"
                                />
                                <span className="sr-only">{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
