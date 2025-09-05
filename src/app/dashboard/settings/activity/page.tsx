import Image from "next/image";
import Link from "next/link";
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import PaginationComponent from "./pagination";
import { DateRangePicker } from "./daterange";
import ComingSoon from "@/components/reusable/dashboard/comingSoon";

export type Order = {
    id: number;
    date: string;
    log: string;
    created_by: string;
};

const data: Order[] = [
    {
        id: 2,
        date: "11 Oct 2021 1:36PM",
        log: "Added New Nominee - John Doe",
        created_by: "Admin",
    },
    {
        id: 1,
        date: "10 Oct 2022 5:40pm",
        log: "Changed Password",
        created_by: "Admin",
    },
];

export default function ActivityLog() {
    // return <ComingSoon/>
    return (
        <main className="grid flex-1 items-start gap-4 md:p-4 md:gap-8">
            <Card className="w-full overflow-x-hidden">
                <CardHeader className="flex flex-col gap-3 md:flex-row items-start justify-between">
                    <CardTitle>Activity Log</CardTitle>

                    <div className="flex items-center gap-2">
                        <DateRangePicker />
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden md:table-cell sm:w-[100px]">
                                    ID
                                </TableHead>
                                <TableHead className="sm:w-[150px] whitespace-nowrap">
                                    Date
                                </TableHead>
                                <TableHead>Activity</TableHead>
                                <TableHead className=" whitespace-nowrap">
                                    Created By
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium hidden md:table-cell ">
                                        {invoice.id}
                                    </TableCell>
                                    <TableCell className="font-medium whitespace-nowrap">
                                        {invoice.date}
                                    </TableCell>

                                    <TableCell>{invoice.log}</TableCell>
                                    <TableCell className="whitespace-nowrap">
                                        {invoice.created_by}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 md:flex-row items-start md:items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        orders
                    </div>
                    <PaginationComponent />
                </CardFooter>
            </Card>
        </main>
    );
}
