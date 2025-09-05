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
export default function CompanyInfo() {
    return (
        <div className="grid md:grid-cols-2 gap-3">
            <div className="grid gap-3">
                <Label htmlFor="name">Company Name</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder="Enter company name"
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Slug</Label>
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
                <Label htmlFor="name">Corporate Phone</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Corporate Email</Label>
                <Input
                    id="name"
                    type="email"
                    className="w-full"
                    placeholder=""
                />
            </div>

            <div className="grid gap-3">
                <Label htmlFor="name">Trade License No.</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Trade License Expiry Date.</Label>
                <Input
                    id="name"
                    type="date"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Company TIN</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="name">Company BIN</Label>
                <Input
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder=""
                />
            </div>
        </div>
    );
}
