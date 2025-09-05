import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ViewNominee({ nominee }: { nominee: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    {/* <Ellipsis className="size-4 text-primary" /> */}
                    View
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px] sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Nominee Details</DialogTitle>
                    <DialogDescription>
                        Review the nominee&apos;s information below.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 text-sm">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage
                                src="https://randomuser.me/api/portraits/lego/7.jpg"
                                alt={nominee.name[0]}
                            />
                            <AvatarFallback>{nominee.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="text-lg font-semibold">
                                {nominee.name}
                            </div>
                            <div className="text-muted-foreground">
                                Nominee ID: {nominee.id}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">
                                NID Number:
                            </div>
                            <div>{nominee.nid}</div>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">Email:</div>
                            <div>{nominee.email}</div>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">
                                Father&apos;s Name:
                            </div>
                            <div>{nominee.father}</div>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">
                                Mother&apos;s Name:
                            </div>
                            <div>{nominee.mother}</div>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">Email:</div>
                            <div>{nominee.email}</div>
                        </div>

                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">Phone:</div>
                            <div>{nominee.phone}</div>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">Status:</div>
                            <span>
                                <Badge>{nominee.status}</Badge>
                            </span>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <div className="text-muted-foreground">
                                Address:
                            </div>
                            <div>{nominee.address}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] items-start gap-4">
                        <div className="text-muted-foreground">
                            National ID:
                        </div>
                        <div className="grid md:grid-cols-2 gap-2">
                            <Link
                                href="/placeholder.svg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/placeholder.svg"
                                    width={400}
                                    height={300}
                                    alt="National ID Image"
                                    className="rounded-lg border"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                />
                            </Link>
                            <Link
                                href="/placeholder.svg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/placeholder.svg"
                                    width={400}
                                    height={300}
                                    alt="National ID Image"
                                    className="rounded-lg border"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <DialogFooter className="items-end">
                    <DialogClose>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
