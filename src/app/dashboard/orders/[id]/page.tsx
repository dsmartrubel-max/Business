

import { Badge } from "@/components/ui/badge";
import CommentSection from "./commentSection";
import { getOrderDetails } from "@/lib/actions/order";
import NotFound from "./notFound";
import Invoice from "./invoice";
import ChangeStatus from "./changeStatus";

export default async function OrderPage({
    params,
}: {
    params: { id: string };
}) {
    const data = await getOrderDetails(params.id);

    if (!data?.order) return <NotFound />;
    return (
        <div className="w-full max-w-5xl mx-auto grid gap-4 lg:gap-6">
            <div className="flex flex-col md:flex-row items-start  md:items-center justify-between  gap-3">
                <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-cal flex items-center gap-2">
                            Order #{data.order.id}{" "}
                        </h1>
                        <Badge className="capitalize font-sans">
                            {data.order.status}
                        </Badge>
                    </div>
                    <p className="text-sm">
                        Schedule:{" "}
                        <strong>
                            {new Date(data.order.date).toDateString()}{" "}
                            {`(${data.order.time})`}
                        </strong>
                    </p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    {/*<ChangeResource />*/}
                    <ChangeStatus order={data.order} />
                </div>
            </div>
            <Invoice data={data} />

            <CommentSection
                comments={data?.comments}
                orderid={data.order.orderid}
            />
        </div>
    );
}
