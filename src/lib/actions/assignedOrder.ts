"use server";

import { redirect } from "next/navigation";
import { query } from "../db";
import { getSession } from "../session";

export async function getAssignedOrder() {
    const userId = await getSession().then((session) => session?.userId);
    try {
        const data: any = await query({
            query: `SELECT
                        orderlist.orderid,
                        orderlist.order_number AS id,
                        orderlist.prefered_date as date,
                        orderlist.prefered_time as time,
                        orderlist.status AS status,
                        orderlist.service_id,
                        orderlist.service_quantity,
                        orderlist.reconciliation_amount,
                        orderlist.reconciliation_type,
                        orderlist.dfcl_comission,
                        area.thana as area
                    FROM orderlist 
                    LEFT JOIN 
                        technician ON technician.tid = orderlist.technician_id
                    LEFT JOIN
                        services s ON s.id = CAST(JSON_UNQUOTE(JSON_EXTRACT(orderlist.service_id, '$[0]')) AS UNSIGNED)
                    LEFT JOIN
                        sub_category subcat ON subcat.id = s.sub_category_id
                    LEFT JOIN
                        customer_address ON customer_address.id = orderlist.address_id
                    LEFT JOIN
                        area ON area.id = customer_address.area
                    WHERE technician_id = ? AND orderlist.status='assign';`,
            values: [userId],
        });
        if (data.length === 0) return null;
        const orderItems: any = await query({
            query: `SELECT
                        s.id AS service_id,
                        s.service_name,
                        s.sale_price,
                        CAST(JSON_UNQUOTE(JSON_EXTRACT(?, CONCAT('$[', FIND_IN_SET(s.id, REPLACE(REPLACE(REPLACE(?, '[', ''), ']', ''), '\"', '')) - 1, ']'))) AS UNSIGNED) AS quantity
                    FROM
                        services s
                    WHERE
                        FIND_IN_SET(s.id, REPLACE(REPLACE(REPLACE(?, '[', ''), ']', ''), '\"', ''));`,
            values: [
                data[0].service_quantity,
                data[0].service_id,
                data[0].service_id,
            ],
        });
        return { order: data[0], items: orderItems };
    } catch (e) {
        return null;
    }
}

export async function acceptOrder(orderId: string) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) return null;
        const results: any = await query({
            query: `UPDATE orderlist SET status='active' WHERE order_number = ? AND technician_id = ?;`,
            values: [orderId, userId],
        });
        //redirect(`/dashboard/orders/${orderId}`);
        return true;
    } catch (e) {
        return false;
    }
}

export async function declineOrder(orderId: string) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) return null;
        const results: any = await query({
            query: `UPDATE orderlist SET status='inactive' WHERE order_number = ? AND technician_id = ?;`,
            values: [orderId, userId],
        });
        redirect(`/dashboard/orders/${orderId}`);
        return results;
    } catch (e) {
        return null;
    }
}
