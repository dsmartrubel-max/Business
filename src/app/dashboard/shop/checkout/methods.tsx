"use client";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const methods = [
    {
        name: "Current Balance",
        description: "Pay with your balance.",
        value: "balance",
    },
    {
        name: "Pay Now Digitally",
        description: "Pay with bkash, nagad and many more.",
        value: "digital",
    },
];

export default function PaymentMethods() {
    const [selected, setSelected] = useState(methods[1].value);

    return (
        <RadioGroup
            value={selected}
            onValueChange={(value) => setSelected(value)}
        >
            <Label className="sr-only">Privacy setting</Label>
            <div className="bg-white rounded-md -space-y-px">
                {/* {settings.map((setting, settingIdx) => (
                    <RadioGroupItem
                        key={setting.name}
                        value={setting.value}
                        className={`${
                            (settingIdx === 0
                                ? "rounded-tl-md rounded-tr-md"
                                : "",
                            settingIdx === settings.length - 1
                                ? "rounded-bl-md rounded-br-md"
                                : "",
                            checked
                                ? "bg-indigo-50 border-indigo-200 z-10"
                                : "border-gray-200",
                            "relative border p-4 flex cursor-pointer focus:outline-none")
                        }`}
                    >
                        {({ active, checked }) => (
                            <>
                                <span
                                    className={classNames(
                                        checked
                                            ? "bg-indigo-600 border-transparent"
                                            : "bg-white border-gray-300",
                                        active
                                            ? "ring-2 ring-offset-2 ring-indigo-500"
                                            : "",
                                        "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                                    )}
                                    aria-hidden="true"
                                >
                                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                                </span>
                                <div className="ml-3 flex flex-col">
                                    <Label
                                        as="span"
                                        className={classNames(
                                            checked
                                                ? "text-indigo-900"
                                                : "text-gray-900",
                                            "block text-sm font-medium"
                                        )}
                                    >
                                        {setting.name}
                                    </Label>
                                    <RadioGroup.Description
                                        as="span"
                                        className={classNames(
                                            checked
                                                ? "text-indigo-700"
                                                : "text-gray-500",
                                            "block text-sm"
                                        )}
                                    >
                                        {setting.description}
                                    </RadioGroup.Description>
                                </div>
                            </>
                        )}
                    </RadioGroupItem>
                ))} */}
                <RadioGroup
                    defaultValue="digital"
                    onValueChange={(value) => setSelected(value)}
                    value={selected}
                >
                    {methods.map((method, id) => (
                        <div
                            key={id}
                            className={`border-2 p-3 rounded-lg shadow flex items-center space-x-3 ${
                                selected === method.value
                                    ? "border-primary"
                                    : "border-gray-200"
                            }`}
                            onClick={() => setSelected(method.value)}
                        >
                            <RadioGroupItem
                                value={method.value}
                                id={method.value}
                            />
                            <Label
                                htmlFor={method.value}
                                className="grid gap-2"
                            >
                                {method.name}
                                <span className="text-sm text-gray-500">
                                    {method.description}
                                </span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </RadioGroup>
    );
}
