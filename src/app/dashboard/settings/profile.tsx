"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function MyProfile() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            type="text"
                            className="w-full"
                            placeholder=""
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="name">Father&apos;s Name</Label>
                        <Input
                            id="name"
                            type="text"
                            className="w-full"
                            placeholder=""
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="name">Mother&pos;s Name</Label>
                        <Input
                            id="name"
                            type="text"
                            className="w-full"
                            placeholder=""
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
