import DetailDialog from "./dialog";
import DateRangePicker from "./daterange";
import ExportDialog from "./export";
import Filter from "./filter";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import PaginationComponent from "./pagination";
import { Badge } from "@/components/ui/badge";
import ComingSoon from "@/components/reusable/dashboard/comingSoon";

export type Transaction = {
    id: number;
    date: string;
    description: string;
    source: string;
    voucher: string;
    creditOrDebit: "credit" | "debit";
    paymentMethod: string;
    credit: number;
    debit: number;
    balance: number;
    createdBy: string;
    approvedBy: string;
};

const data: Transaction[] = [
    {
        id: 1010,
        date: "2021-10-10",
        description: "ccvsvsvsdvsdgdsf",
        source: "Online",
        paymentMethod: "bkash",
        voucher: "AJDGCB87",
        creditOrDebit: "credit",
        credit: 1000,
        debit: 0,
        balance: 2500,
        createdBy: "DFCL",
        approvedBy: "DFCL",
    },
    {
        id: 1010,
        date: "2021-10-10",
        description: "ccvsvsvsdvsdgdsf",
        source: "Online",
        paymentMethod: "bkash",
        voucher: "AJDGCB87",
        creditOrDebit: "credit",
        credit: 1000,
        debit: 0,
        balance: 2500,
        createdBy: "DFCL",
        approvedBy: "DFCL",
    },
    {
        id: 1010,
        date: "2021-10-10",
        description: "ccvsvsvsdvsdgdsf",
        source: "Online",
        paymentMethod: "bkash",
        voucher: "AJDGCB87",
        creditOrDebit: "credit",
        credit: 1000,
        debit: 0,
        balance: 2500,
        createdBy: "DFCL",
        approvedBy: "DFCL",
    },
    {
        id: 1010,
        date: "2021-10-10",
        description: "ccvsvsvsdvsdgdsf",
        source: "Online",
        paymentMethod: "bkash",
        voucher: "AJDGCB87",
        creditOrDebit: "credit",
        credit: 1000,
        debit: 0,
        balance: 2500,
        createdBy: "DFCL",
        approvedBy: "DFCL",
    },
];

export default function MyAccounts() {
    // return <ComingSoon />;
    return (
        <main className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8 overflow-x-hidden">
            <Card className="w-full overflow-x-hidden">
                <CardHeader className="flex flex-col gap-3 md:flex-row items-start justify-between">
                    <div>
                        <CardTitle>Transactions</CardTitle>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <Filter />
                        <DateRangePicker />
                        <ExportDialog />
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="hidden xl:table-cell">
                                    Type
                                </TableHead>
                                <TableHead className="hidden xl:table-cell">
                                    Credit
                                </TableHead>
                                <TableHead className="hidden xl:table-cell">
                                    Debit
                                </TableHead>
                                <TableHead className="hidden xl:table-cell">
                                    Balance
                                </TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-xs md:text-sm">
                            {data.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">
                                        {invoice.id}
                                    </TableCell>
                                    <TableCell className="">
                                        {invoice.date}
                                    </TableCell>

                                    <TableCell className="">
                                        {invoice.description}
                                    </TableCell>
                                    <TableCell className="hidden xl:table-cell">
                                        <Badge>
                                            {invoice.creditOrDebit
                                                .charAt(0)
                                                .toUpperCase() +
                                                invoice.creditOrDebit.slice(1)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-cell">
                                        {invoice.credit}
                                    </TableCell>
                                    <TableCell className="hidden xl:table-cell">
                                        {invoice.debit}
                                    </TableCell>

                                    <TableCell className="hidden xl:table-cell">
                                        {invoice.balance}
                                    </TableCell>

                                    <TableCell>
                                        <DetailDialog data={invoice} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        transactions
                    </div>
                    <PaginationComponent />
                </CardFooter>
            </Card>
        </main>
    );
}
