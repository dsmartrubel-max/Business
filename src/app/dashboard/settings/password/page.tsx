"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ChangePassword() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="oldpassword">Old Password</Label>
                        <Input
                            id="oldpassword"
                            type="password"
                            className="w-full"
                            placeholder="********"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="newpassword">New Password</Label>
                        <Input
                            id="newpassword"
                            type="password"
                            className="w-full"
                            placeholder="********"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="newpassword2">New Password Again</Label>
                        <Input
                            id="newpassword2"
                            type="password"
                            className="w-full"
                            placeholder="********"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button>Change Password</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
