import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Images({ data }: { data: any }) {
    return (
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                    <CardTitle>Company Logo</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        {data.company_logo ? (
                            <Image
                                alt="Logo"
                                className="aspect-square w-full rounded-md object-cover"
                                height="300"
                                src={`https://admin.dfclbd.com/media/resource_images/${data.company_logo}`}
                                width="300"
                            />
                        ) : (
                            <Button className="w-full" size="sm">
                                Upload Logo
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Trade License</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        {/* <Image
                                        alt="Product image"
                                        className="aspect-paper w-full rounded-md object-cover"
                                        height="400"
                                        src="/placeholder.svg"
                                        width="300"
                                    /> */}

                        {data.trade_licence_copy ? (
                            <Image
                                alt="Logo"
                                className="aspect-paper w-full rounded-md object-cover"
                                height="300"
                                src={`https://admin.dfclbd.com/media/resource_images/${data.trade_licence_copy}`}
                                width="300"
                            />
                        ) : (
                            <Button className="w-full" size="sm">
                                Upload Trade License
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Business Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        {/* <Image
                                        alt="Business Card"
                                        className="aspect-video w-full rounded-md object-cover"
                                        height="180"
                                        src="/placeholder.svg"
                                        width="320"
                                    /> */}
                        <Button className="w-full" variant="outline" size="sm">
                            View
                        </Button>
                        <Button className="w-full" size="sm">
                            Upload New
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                    <CardTitle>Bank Check</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        {/* <Image
                                        alt="Bank Check"
                                        className="aspect-[5/2] w-full rounded-md object-cover"
                                        height="180"
                                        src="/placeholder.svg"
                                        width="320"
                                    /> */}

                        <Button className="w-full" variant="outline" size="sm">
                            View
                        </Button>
                        <Button className="w-full" size="sm">
                            Upload New
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>TIN</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        {/* <Image
                                        alt="Product image"
                                        className="aspect-paper w-full rounded-md object-cover"
                                        height="400"
                                        src="/placeholder.svg"
                                        width="300"
                                    /> */}

                        <Button className="w-full" size="sm">
                            Upload New
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>BIN</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        {/* <Image
                                        alt="Product image"
                                        className="aspect-paper w-full rounded-md object-cover"
                                        height="400"
                                        src="/placeholder.svg"
                                        width="300"
                                    /> */}

                        <Button className="w-full" size="sm">
                            Upload New
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
