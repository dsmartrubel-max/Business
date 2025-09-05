import { getAssignedOrder } from "@/lib/actions/assignedOrder";
import AssignedOrderDialog from "./dialog";

export default async function AssignedOrder() {
    const order = await getAssignedOrder();
    if (!order) return null;
    return <AssignedOrderDialog data={order} />;
}
