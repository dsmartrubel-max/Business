import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import AddService from "./addService";
import { DeleteService } from "./delete";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getServicesList } from "@/lib/actions/services";

export default async function MyServices() {
    const serviceList = await getServicesList();
    return (
        <main className="grid flex-1 items-start gap-4 sm:p-6 md:gap-8">
            <div className="grid gap-6">
                <div className="flex flex-row items-start justify-between">
                    <CardTitle>My Services</CardTitle>

                    {/* <div className="ml-auto flex items-center gap-2">
                        <AddService />
                    </div> */}
                </div>
                <div className="flex flex-col gap-2">
                    {serviceList.map((category: any) => (
                        <Card key={category.id}>
                            <CardHeader className="sr-only">
                                <CardTitle>Category: {category.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-2 md:px-4 py-0">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="border-0 flex-row-reverse justify-end gap-3 [&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0">
                                            Category: {category.name}
                                        </AccordionTrigger>
                                        <AccordionContent className="ml-2 md:ml-4">
                                            {category.subcategories.map(
                                                (subcategory: any) => (
                                                    <Accordion
                                                        type="single"
                                                        collapsible
                                                        className="w-full  px-4"
                                                        key={`${category.id}-${subcategory.id}`}
                                                    >
                                                        <AccordionItem value="item-1">
                                                            <AccordionTrigger className="border-0 flex-row-reverse justify-end gap-3 [&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0">
                                                                Subcategory:{" "}
                                                                {
                                                                    subcategory.name
                                                                }
                                                            </AccordionTrigger>
                                                            <AccordionContent className="ml-2 md:ml-4 flex flex-wrap gap-4">
                                                                {subcategory.services.map(
                                                                    (
                                                                        service: any
                                                                    ) => (
                                                                        <Card
                                                                            key={`${category.id}-${subcategory.id}-${service.id}`}
                                                                            className="py-1.5 px-3 flex items-center gap-2"
                                                                        >
                                                                            {`${service.name}`}
                                                                            <strong>
                                                                                &#40;&#2547;
                                                                                {`${service.price})`}
                                                                            </strong>
                                                                            {/* <Badge>
                                                                                Pending
                                                                            </Badge>
                                                                            <DeleteService
                                                                                service={
                                                                                    service
                                                                                }
                                                                            /> */}
                                                                        </Card>
                                                                    )
                                                                )}
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                )
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
