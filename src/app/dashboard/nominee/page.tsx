import { PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getNomineeList } from "@/lib/actions/nominee";

type Nominee = {
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

export default async function MyNominee() {
    const data: Nominee[] = await getNomineeList();
    return (
        <main className="max-w-7xl w-full mx-auto grid gap-4 p-0 md:p-3 sm:px-6 sm:py-0 md:gap-6">
            <div className="flex items-center justify-between gap-3">
                <CardTitle>My Nominee</CardTitle>
                {/* <Link href="/dashboard/nominees/new">
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className=" sm:whitespace-nowrap">
                            Add Nominee
                        </span>
                    </Button>
                </Link> */}
            </div>
            {data.length === 0 && <div className="">No nominee found.</div>}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((nominee: Nominee) => (
                    <Card key={nominee.id} className="overflow-hidden">
                        <CardHeader className="p-4">
                            <Image
                                src={`https://admin.dfclbd.com/media/resource_images/${nominee.image}`}
                                alt={`${nominee.name}'s portrait`}
                                className="w-full aspect-square object-cover object-center rounded-full"
                                height={250}
                                width={250}
                            />
                            <CardTitle className="sr-only">
                                {nominee.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            {/* <Badge
                                className={`${
                                    statusColors[nominee.status]
                                } text-white`}
                            >
                                {nominee.status}
                            </Badge> */}
                            <h2 className="text-xl font-semibold my-1 truncate">
                                {nominee.name}
                            </h2>

                            <Link
                                href={`/dashboard/nominee/${nominee.id}`}
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
