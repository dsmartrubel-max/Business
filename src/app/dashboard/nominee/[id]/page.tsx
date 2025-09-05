import { ChevronLeft, Copy, Download, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DeleteNominee } from "./delete";
import { getNomineeDetail } from "@/lib/actions/nominee";
export default async function NomineeDetails({
    params,
}: {
    params: { id: number };
}) {
    const data = await getNomineeDetail(params.id);

    return (
        <div className="w-full max-w-5xl mx-auto grid gap-4">
            <div>
                <Link href="/dashboard/nominee">
                    <Button
                        className="flex items-center gap-3"
                        variant="outline"
                        size="sm"
                    >
                        <ChevronLeft />
                        Back to Nominee List
                    </Button>
                </Link>
            </div>

            <Card className="overflow-hidden w-full mx-auto">
                <CardHeader className="flex flex-col md:flex-row items-start md:justify-between bg-muted/50 gap-4">
                    <div className="flex items-center gap-3">
                        <Avatar className="size-12 md:size-16 border-primary border-2">
                            <AvatarImage
                                src={`https://admin.dfclbd.com/media/resource_images/${data.image}`}
                                alt={data.name[0]}
                            />
                            <AvatarFallback>{data.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <CardTitle className="text-base md:text-lg truncate">
                                {data.name}
                            </CardTitle>
                            <CardDescription>
                                Nominee ID: {data.ID}
                            </CardDescription>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {/* <DeleteResource resource={data} /> */}
                        <Button size="sm">
                            <Download className="h-5 w-5 mr-2" />
                            Download PDF
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm md:text-base">
                    <div className="grid gap-3">
                        <div className="font-semibold">
                            Personal Information
                        </div>
                        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Resource Status
                                </p>
                                <div>
                                    <Badge>{data.status}</Badge>
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Verification
                                </p>
                                <div>
                                    <Badge>{data.verification}</Badge>
                                </div>
                            </div> */}
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">Name</p>
                                <p>{data.name}</p>
                            </div>

                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Date Of Birth
                                </p>
                                <p>{data.date_of_birth.toLocaleDateString()}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Father&apos;s Name
                                </p>
                                <p>{data.father_name}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Mother&apos;s Name
                                </p>
                                <p>{data.mother_name}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Blood Group
                                </p>
                                <p>{data.blood_group}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Primary Area
                                </p>
                                <p>N/A</p>
                            </div>

                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Present Address
                                </p>
                                <p>{data.address}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Permanent Address
                                </p>
                                <p>{data.permenent_address}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Mobile Number
                                </p>
                                <div>
                                    {data.phone}{" "}
                                    <Badge variant="secondary">Verified</Badge>
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-muted-foreground">
                                    Email Address
                                </p>
                                <p>{data.email}</p>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-4" />
                    <div className="grid gap-4">
                        <div className="font-semibold">National ID</div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link
                                href={`https://admin.dfclbd.com/media/resource_images/${data.nid_copy}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={`https://admin.dfclbd.com/media/resource_images/${data.nid_copy}`}
                                    width={500}
                                    height={300}
                                    alt="National ID Image"
                                    className="size-full aspect-[5/3] rounded-lg border object-cover object-center"
                                />
                            </Link>
                            <Link
                                href="/placeholder.svg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/placeholder.svg"
                                    width={500}
                                    height={300}
                                    alt="National ID Image"
                                    className="size-full aspect-[5/3] rounded-lg border object-cover object-center"
                                />
                            </Link>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="grid gap-3">
                            <div className="font-semibold">
                                Bank Information
                            </div>
                            <div className="grid gap-0.5 not-italic text-muted-foreground">
                                <span>Account name: </span>
                                <span>Account number:</span>
                                <span>Bank Name: </span>
                                <span>Branch: </span>
                            </div>
                        </div>
                        <div className="grid auto-rows-max gap-3">
                            <div className="font-semibold">Mobile Banking</div>
                            <div className="grid gap-0.5 not-italic text-muted-foreground">
                                <span>bkash:</span>
                                <span>Nagad:</span>
                                <span>Rocket:</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground">
                        Updated{" "}
                        <time dateTime="2023-11-23">November 23, 2023</time>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
