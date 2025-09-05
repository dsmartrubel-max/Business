import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { methods } from "./methods";
import Image from "next/image";
import { HandCoins, Percent, Zap } from "lucide-react";
import EMIFAQ from "./faq";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function PaymentMethodsContent() {
    const emiCards = [
        {
            title: "0% Markup",
            icon: <Percent className="size-8" />,
            description:
                "No mark-up or hidden charges on Bank's EMI Plan facility.",
        },
        {
            title: "Instant Approval",
            icon: <Zap className="size-8" />,
            description:
                "Choose your Bank's EMI Plan, enter your card details, and we are ready to ship you your sarvice or product.",
        },
        {
            title: "No Down Payment",
            icon: <HandCoins className="size-8" />,
            description: "Shop your heart out without any down payment",
        },
    ];
    return (
        <div className="grid gap-8">
            <section className="grid gap-4">
                <p>
                    We accept various payment methods including the popular
                    methods like bKash, Nagad, upay, visa, mastercard and many
                    more.
                </p>
                <Tabs
                    defaultValue="Mobile Banking"
                    className="w-full grid gap-4"
                >
                    <div className="rounded-lg border-2 border-primary">
                        <TabsList className="grid w-full grid-cols-4 border-primary">
                            {methods.map((method, idx) => (
                                <TabsTrigger
                                    key={idx}
                                    value={method.title}
                                    className=" data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
                                >
                                    <span className="hidden md:block">
                                        {method.title}
                                    </span>
                                    <span className="md:hidden">
                                        {method.shortTitle}
                                    </span>
                                </TabsTrigger>
                            ))}
                            <TabsTrigger
                                value="EMI"
                                className=" data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
                            >
                                EMI
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    {methods.map((type, idx) => (
                        <TabsContent key={idx} value={type.title}>
                            <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
                                {type.methods.map((method, idx) => (
                                    <div
                                        key={idx}
                                        className="h-16 p-2 bg-white rounded-lg shadow-lg border flex items-center justify-center"
                                    >
                                        <Image
                                            src={method.icon}
                                            alt={method.name}
                                            height={100}
                                            width={100}
                                            className="size-4/5 object-contain object-center "
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                    <TabsContent value="EMI">Coming Soon</TabsContent>
                </Tabs>
            </section>
            <section className="grid gap-6">
                <h2 className="font-cal text-2xl md:text-3xl lg:text-4xl text-center">
                    Equated Monthly Installments (EMI)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {emiCards.map((card, idx) => (
                        <Card
                            key={idx}
                            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border-2 hover:border-primary"
                        >
                            <CardHeader className="flex flex-col gap-2 items-center text-center">
                                <div>{card.icon}</div>
                                <CardTitle>{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-sm">
                                {card.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            <section className="grid gap-6">
                <h2 className="font-cal text-xl md:text-2xl lg:text-3xl text-center">
                    Supported Banks
                </h2>
                <p>Coming soon</p>
            </section>
            <EMIFAQ />
            <section className="grid gap-6">
                <h2 className="font-cal text-xl md:text-2xl lg:text-3xl text-center">
                    EMI Terms and Conditions
                </h2>
                <ol className="list-decimal flex flex-col gap-1.5 text-sm md:text-base">
                    <li>
                        Minimum purchase amount for each transaction should be
                        BDT 10,000/- to avail an Easy Monthly Installment.
                    </li>
                    <li>
                        You can checkout only if your credit limit is equal to
                        or greater than the price of the product.
                    </li>
                    <li>
                        Only customers opting for Easy Monthly Installment on
                        DFCL checkout page are eligible for this option.
                        Furthermore, Easy Monthly Installment is only available
                        with DFCL&apos;s Easy Monthly Installment Partners.
                    </li>
                    <li>
                        Easy Monthly Installment is available at 0% mark-up for
                        a tenure of 3 months.
                    </li>
                    <li>
                        The conversion of purchase to Easy Monthly Installments
                        may take up to 7 (seven) working days.
                    </li>
                    <li>
                        Purchase on DFCL to be made at least 3 (three) working
                        days before the next credit card statement is generated
                        to ensure the transaction reflects in that statement.
                        For example, your statement date is March 18, 2024,
                        then, the purchase should be made before March 21, 2024.
                    </li>
                    <li>
                        If you make a purchase within the 3 days period as
                        mentioned in the paragraph no. 3 or after the statement
                        date, then, the transaction will reflect in the next
                        month&apos;s statement.
                    </li>
                    <li>
                        The Bank providing Easy Month Installment service is not
                        acting as corporate agent/distributor of third party
                        products/services and shall not be responsible in any
                        manner to any person or to any claim.
                    </li>
                    <li>
                        The Bank providing service is not acting as corporate
                        agent/distributor of third party products/services and
                        shall not be responsible in any manner to any person or
                        to any claim.
                    </li>
                    <li>
                        In case of order cancellations by DFCL, the installment
                        plan will be cancelled and no pre-payment charges will
                        apply.
                    </li>
                    <li>
                        Notwithstanding anything contained in this Terms and
                        Conditions and Credit Card terms and conditions, DFCL
                        reserves unconditional and unequivocal right to reject,
                        refuse, delay, object to provide Equated Monthly
                        Installment facility to any customer for any product
                        and/or service, even after complying with the all the
                        above-mentioned requirements, without citing or stating
                        any reason.
                    </li>
                </ol>
            </section>
        </div>
    );
}
