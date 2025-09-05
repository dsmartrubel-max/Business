import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AddLocation } from "./addLocation";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { DeleteLocation } from "./delete";
import ComingSoon from "@/components/reusable/dashboard/comingSoon";
import { getLocationList } from "@/lib/actions/area";

type Category = {
    id: number;
    name: string;
};

type Subdivision = {
    id: number;
    name: string;
};
type Location = {
    id: number;
    name: string;
};
//create a type to have divisions, districts, and locations
type Data = {
    division: Category;
    districts: { district: Subdivision; locations: Location[] }[];
};

const data: Data[] = [
    {
        division: {
            id: 1,
            name: "AC Repair",
        },
        districts: [
            {
                district: {
                    id: 1,
                    name: "AC Gas Filling R-32",
                },
                locations: [
                    {
                        id: 1,
                        name: "AC Gas Filling R-32 1 Ton",
                    },
                    {
                        id: 2,
                        name: "AC Gas Filling R-32 2 Ton",
                    },
                ],
            },
        ],
    },
];

export default async function MyLocations() {
    const locations = await getLocationList();
    // return <ComingSoon/>
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:p-6 md:gap-8">
            <div className="grid gap-6">
                <div className="flex flex-row items-start justify-between">
                    <CardTitle>My Locations</CardTitle>

                    <div className="ml-auto flex items-center gap-2">
                        <AddLocation />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {locations.map((division: any) => (
                        <Card key={division.id}>
                            <CardHeader className="sr-only">
                                <CardTitle>Division: {division.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 py-0">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="border-0 flex-row-reverse justify-end gap-3 [&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0">
                                            Division: {division.name}
                                        </AccordionTrigger>
                                        <AccordionContent className="ml-4">
                                            {division.districts.map(
                                                (district: any) => (
                                                    <Accordion
                                                        type="single"
                                                        collapsible
                                                        className="w-full  px-4"
                                                        key={`${division.id}-${district.id}`}
                                                    >
                                                        <AccordionItem value="item-1">
                                                            <AccordionTrigger className="border-0 flex-row-reverse justify-end gap-3 [&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0">
                                                                District:{" "}
                                                                {district.name}
                                                            </AccordionTrigger>
                                                            <AccordionContent className="ml-4 flex flex-wrap gap-4">
                                                                {district.areas.map(
                                                                    (
                                                                        location: any
                                                                    ) => (
                                                                        <Card
                                                                            key={`${division.id}-${district.id}-${location.id}`}
                                                                            className="py-1.5 px-3 flex items-center gap-2"
                                                                        >
                                                                            {
                                                                                location.name
                                                                            }
                                                                            {/* <Badge>
                                                                                Pending
                                                                            </Badge>
                                                                            <DeleteLocation
                                                                                location={
                                                                                    location
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
