"use server";
import { getSession } from "../session";
import { query } from "../db";

export async function getOrderSummary() {
    const data = await getSession();
    try {
        const results: any = await query({
            query: `SELECT 
                        SUM(CASE WHEN prefered_date = CURDATE() AND status != 'inactive' THEN 1 ELSE 0 END) AS today,
                        SUM(CASE WHEN prefered_date = CURDATE() + INTERVAL 1 DAY AND status != 'inactive' THEN 1 ELSE 0 END) AS tomorrow,
                        COUNT(*) AS all_orders,
                        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) AS active,
                        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending,
                        SUM(CASE WHEN status = 'complete' THEN 1 ELSE 0 END) AS completed,
                        SUM(CASE WHEN status = 'cancel' THEN 1 ELSE 0 END) AS cancelled,
                        SUM(CASE WHEN status = 'BILLREQUESTED' THEN 1 ELSE 0 END) AS billreq,
                        SUM(CASE WHEN status = 'PROCESSING' THEN 1 ELSE 0 END) AS processing,
                        SUM(CASE WHEN status = 'served' THEN 1 ELSE 0 END) AS served,
                        SUM(CASE WHEN process_date + INTERVAL 15 DAY >= CURDATE() AND (status = 'complete' OR status='served') THEN 1 ELSE 0 END) AS warranty,
                        SUM(CASE WHEN status = 'complain' THEN 1 ELSE 0 END) AS complain,
                        SUM(CASE WHEN MONTH(prefered_date) = MONTH(CURDATE()) AND status = 'cancel' THEN 1 ELSE 0 END) AS cancel_this_month
                    FROM 
                        orderlist
                    WHERE 
                        technician_id = ?;`,
            values: [data?.userId],
        });
        return results[0];
    } catch (e) {
        return {};
    }
}
