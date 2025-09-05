import AddBalanceCard from "@/components/reusable/dashboard/paymentDialog";
import { Card } from "@/components/ui/card";

export default function BalancePage() {
    return (
        <div className="w-full mx-auto p-3 flex flex-col gap-4 max-w-xl">
            <h1 className="font-cal text-3xl">Add Balance</h1>
            <Card>
                <AddBalanceCard />
            </Card>
        </div>
    );
}
