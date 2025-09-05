import { AddBalancePlusButton } from "@/components/reusable/dashboard/paymentDialog";
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import BuyPackage from "./buy";
import { spInfo } from "@/lib/actions/sp";
import { getPackageList } from "@/lib/actions/package";

export default async function PackagePage() {
    const session = await spInfo();
    const packagesList: any = await getPackageList();
    const currentPackage = packagesList.find(
        (item: any) => item.package_name == session.package_name
    );
    let expiry_date = new Date(session.pkg_start_date);

    expiry_date.setDate(
        new Date(session.pkg_start_date).getDate() +
            currentPackage.package_duration
    );
    return (
        <div className="w-full mx-auto max-w-7xl grid gap-6 md:p-3">
            <div className="grid  gap-6">
                <div className="grid gap-3">
                    <CardTitle>My Package</CardTitle>
                    <CardDescription className="grid gap-2">
                        <span>
                            Current Package:{" "}
                            <strong>{session.package_name}</strong>
                        </span>
                        <span>
                            Expiry Date:{" "}
                            <strong>{expiry_date.toDateString()}</strong>
                        </span>
                    </CardDescription>
                    {/* <CardFooter className="p-0">
                        <AddBalancePlusButton
                            variant="outline"
                            balance={
                                session?.balance
                                    ? (session.balance as number)
                                    : 0
                            }
                        />
                    </CardFooter> */}
                </div>

                <CardTitle>Other Packages</CardTitle>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {packagesList.map(
                        (item: any) =>
                            item.packid != 2 &&
                            item.packid != 10 && (
                                <Card key={item.packid}>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle>
                                            {item.package_name}
                                        </CardTitle>
                                        <CardTitle>
                                            ৳{item.package_price}
                                        </CardTitle>
                                        {/* <CardDescription className="text-base text-primary font-bold">
                                </CardDescription> */}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-sm grid gap-2">
                                            <ul className="grid divide-y">
                                                <li className="py-1.5 flex items-center justify-between">
                                                    <span className="text-muted-foreground">
                                                        Comission
                                                    </span>
                                                    <span>
                                                        {item.commission}%
                                                    </span>
                                                </li>
                                                {/* <li className="py-1.5 flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Price
                                            </span>
                                            <span>
                                                {item.package_price} taka
                                            </span>
                                        </li> */}
                                                <li className="py-1.5 flex items-center justify-between">
                                                    <span className="text-muted-foreground">
                                                        Duration
                                                    </span>
                                                    <span>
                                                        {item.package_duration}{" "}
                                                        Days
                                                    </span>
                                                </li>
                                                <li className="py-1.5 flex items-center justify-between">
                                                    <span className="text-muted-foreground">
                                                        Resources
                                                    </span>
                                                    <span>
                                                        {item.total_resource}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <BuyPackage
                                            item={item}
                                            currentPackage={
                                                item.package_name ==
                                                session.package_name
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </CardFooter>
                                </Card>
                            )
                    )}
                </div>
            </div>
            {/* <Card className="hidden md:block w-full overflow-x-hidden">
                <CardHeader className="px-7">
                    <CardTitle>My Package</CardTitle>
                    <CardDescription className="grid gap-2">
                        <span>
                            Current Package: <strong>Observation</strong>
                        </span>
                        <span>
                            Expiry Date: <strong>32 February, 2025</strong>
                        </span>
                    </CardDescription>
                    <div className="inline-flex">
                        <AddBalancePlusButton
                            variant="outline"
                            balance={
                                session?.balance
                                    ? (session.balance as number)
                                    : 0
                            }
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <h2 className="text-lg font-bold">Other Packages</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Commission</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Buy</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {packagesList.map((item: any) => (
                                <TableRow
                                    key={item.packid}
                                    className="odd:bg-secondary"
                                >
                                    <TableCell>{item.package_name}</TableCell>
                                    <TableCell>{item.commission}%</TableCell>
                                    <TableCell>{item.package_price}</TableCell>
                                    <TableCell>
                                        {item.package_duration} Days
                                    </TableCell>
                                    <TableCell>
                                        <BuyPackage item={item} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card> */}
        </div>
    );
}
