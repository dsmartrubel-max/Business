import { PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getResourceList } from "@/lib/actions/resource";

type Resource = {
    id: number;
    name: string;
    status: "ACTIVE" | "CLOSED" | "INACTIVE";
    image: string;
};

const statusColors = {
    ACTIVE: "bg-green-500",
    INACTIVE: "bg-yellow-500",
    CLOSED: "bg-red-500",
};

export default async function MyResources() {
    const data: Resource[] = await getResourceList();
    return (
        <main className="max-w-7xl w-full mx-auto grid gap-4 p-0 md:p-3 sm:px-6 sm:py-0 md:gap-6">
            <div className="flex items-center justify-between gap-3">
                <CardTitle>My Resources</CardTitle>
                {/* <Link href="/dashboard/resources/new">
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className=" sm:whitespace-nowrap">
                            Add Resource
                        </span>
                    </Button>
                </Link> */}
            </div>
            {data.length === 0 && <div className="">No resource found.</div>}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((resource: Resource) => (
                    <Card key={resource.id} className="overflow-hidden">
                        <CardHeader className="p-4">
                            <Image
                                src={`https://admin.dfclbd.com/media/resource_images/${resource.image}`}
                                alt={`${resource.name}'s portrait`}
                                className="w-full aspect-square object-cover object-center rounded-full"
                                height={250}
                                width={250}
                            />
                            <CardTitle className="sr-only">
                                {resource.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <Badge
                                className={`${
                                    statusColors[resource.status]
                                } text-white`}
                            >
                                {resource.status}
                            </Badge>
                            <h2 className="text-xl font-semibold my-1 truncate">
                                {resource.name}
                            </h2>

                            <Link
                                href={`/dashboard/resources/${resource.id}`}
                                className="w-full"
                            >
                                <Button className="mt-2 w-full h-8" size="sm">
                                    View
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}
