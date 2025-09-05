import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
export default function NomineeInfo() {
    return (
        <div className="grid md:grid-cols-2 gap-3">
            <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder="Enter Nominee's full name"
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Date Of Birth</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Father&apos; Name</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Mother&apos; Name</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid md:col-span-2 gap-3">
                <Label htmlFor="name">Address</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="lg:col-span-2 grid lg:grid-cols-3 gap-3">
                <Select required>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select Division" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Division</SelectLabel>

                            <SelectItem value="Dhaka">Dhaka</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select required>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>District</SelectLabel>

                            <SelectItem value="Dhaka">Dhaka</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select required>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select Area" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Area</SelectLabel>

                            <SelectItem value="Sabujbag">Sabujbag</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Blood Group</Label>
                <Select required>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select Blood Group" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Blood Group</SelectLabel>

                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Relation with Nominee</Label>
                <Select required>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select Relation" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Relation</SelectLabel>

                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="brother">Brother</SelectItem>
                            <SelectItem value="sister">Sister</SelectItem>
                            <SelectItem value="son">Son</SelectItem>
                            <SelectItem value="daughter">Daughter</SelectItem>
                            <SelectItem value="husband">Husband</SelectItem>
                            <SelectItem value="wife">Wife</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">NID Card Front Side</Label>
                <Input
                    id="name"
                    type="file"
                    className="w-full"
                    placeholder=""
                    accept="image/*"
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">NID Card Back Side</Label>
                <Input
                    id="name"
                    type="file"
                    className="w-full"
                    placeholder=""
                    accept="image/*"
                />
            </div>
            <div className="grid gap-3"></div>
        </div>
    );
}
