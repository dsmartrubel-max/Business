import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Images from "./images";
import { spProfile } from "@/lib/actions/sp";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const statusColors = {
    ACTIVE: "bg-white border-2 border-green-700 text-green-700 hover:bg-white",
    CLOSED: "bg-red-50 border-2 border-red-700 text-red-700 hover:bg-red-50",
    INACTIVE:
        "bg-yellow-50 border border-red-700 text-red-700 hover:bg-yellow-50",
};
const verifyColors = {
    VERIFIED:
        "bg-white border-2 border-green-700 text-green-700 hover:bg-white",
    UNVERIFIED:
        "bg-red-50 border-2 border-red-700 text-red-700 hover:bg-red-50",
};

export default async function Profile() {
    const sp = await spProfile();
    return (
        <div className="w-full mx-auto grid max-w-5xl flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <h1 className="flex-1 shrink-0 whitespace-nowrap font-cal text-3xl font-semibold tracking-tight sm:grow-0">
                        Company Profile
                    </h1>
                    <div className="flex gap-2">
                        <Badge
                            className={
                                statusColors[
                                    sp.status as
                                        | "ACTIVE"
                                        | "CLOSED"
                                        | "INACTIVE"
                                ]
                            }
                        >
                            {sp.status}
                        </Badge>
                        <Badge
                            className={
                                verifyColors[
                                    sp.verification as "VERIFIED" | "UNVERIFIED"
                                ]
                            }
                        >
                            {sp.verification}
                        </Badge>
                    </div>
                </div>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button size="sm">
                        <Download size={16} className="mr-2" />
                        Download Portfolio
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Company Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter company name"
                                        value={sp.company_name}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Company Slug</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="enter-company-name"
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        Company Owner Name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter company owner name"
                                        value={sp.name}
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="name">
                                        Corporate Email
                                    </Label>
                                    <Input
                                        id="name"
                                        type="email"
                                        className="w-full"
                                        placeholder="contact@company.com"
                                        value={sp.email}
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="name">Company Adress</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter company address"
                                        value={sp.company_address}
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="grid gap-3">
                                        <Label htmlFor="trade_license_no">
                                            Trade License No.
                                        </Label>
                                        <Input
                                            id="trade_license_no"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter trade license number"
                                            value={sp.trade_licese_no}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">
                                            Trade License Expiry Date
                                        </Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            className="w-full"
                                            placeholder="31-12-2025"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">TIN Number</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="TIN Number"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">BIN Number</Label>
                                        <Input
                                            id="bin"
                                            type="text"
                                            className="w-full"
                                            placeholder="00000000"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="name">Joined On</Label>
                                    <Input
                                        id="name"
                                        type="date"
                                        className="w-full"
                                        disabled
                                        defaultValue={new Date(
                                            sp.joindate
                                        ).toDateString()}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Bank Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Account Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Account Holder's Name"
                                        value={sp.account_name}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Account Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Account Number"
                                        value={sp.account_number}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Bank Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter bank Name"
                                        value={sp.bank_name}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Branch Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Branch Name"
                                        value={sp.branch_name}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Routing Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="Enter Routing Number"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Mobile Banking</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">bkash Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                        value={sp.bkash_no}
                                        disabled
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Nagad Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                        value={sp.nagad_no}
                                        disabled
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Rocket Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                        value={sp.rocket_no}
                                        disabled
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Upay Number</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        placeholder="017XXXXXXXX"
                                        disabled
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Images data={sp} />
            </div>
            <div className="md:hidden">
                <Button size="sm" className="w-full">
                    Update Company
                </Button>
            </div>
        </div>
    );
}
