"use server";
import { query } from "../db";
import { getSession } from "../session";

export async function getOrders(page?: number, status?: string | null) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        const offset = `OFFSET ${(page ? page - 1 : 0) * 10}`;
        const statusFilter = status
            ? status == "today"
                ? `AND prefered_date = CURDATE()`
                : status == "tomorrow"
                ? `AND prefered_date = CURDATE() + INTERVAL 1 DAY`
                : status == "warranty"
                ? `AND process_date + INTERVAL 15 DAY >= CURDATE() AND (orderlist.status = 'complete' OR orderlist.status='served')`
                : status == "cancel-this-month"
                ? `AND MONTH(prefered_date) = MONTH(CURDATE()) AND orderlist.status = 'cancel'`
                : `AND orderlist.status = '${status}'`
            : "";

        if (!userId) return [];
        const results: any = await query({
            query: `SELECT 
                        (SELECT COUNT(*) 
                        FROM orderlist 
                        WHERE technician_id = ? ${statusFilter}) AS total,
                        orderlist.service_price AS service_price,
                        orderlist.service_quantity,
                        orderlist.order_number AS id, 
                        orderlist.prefered_date, 
                        orderlist.prefered_time,
                        orderlist.status AS status, 
                        orderlist.reconciliation_amount,
                        orderlist.reconciliation_type,
                        orderlist.process_date,
                        orderlist.meterials_cost as materials_cost,
                        technician.name AS resource, 
                        technician.phone AS resource_phone,
                        subcat.sub_category_name as subcategory,
                        area.thana as location,
                        customer.customer_name,
                        customer.customer_phone
                    FROM 
                        orderlist 
                    JOIN 
                        technician ON technician.tid = orderlist.technician_id
                    LEFT JOIN 
                        services s ON s.id = CAST(JSON_UNQUOTE(JSON_EXTRACT(orderlist.service_id, '$[0]')) AS UNSIGNED)
                    LEFT JOIN 
                        sub_category subcat ON subcat.id = s.sub_category_id
                    LEFT JOIN
                        customer_address ON customer_address.id = orderlist.address_id
                    LEFT JOIN
                        area ON area.id = customer_address.area
                    LEFT JOIN
                        customer ON customer.cid = orderlist.customer_id
                    WHERE 
                        orderlist.technician_id = ?
                        AND orderlist.status != 'inactive'
                        ${statusFilter}
                    ORDER BY 
                        orderlist.orderid DESC 
                    LIMIT 10 ${offset};
                    `,
            values: [userId, userId],
        });
        return results;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getOrderDetails(id: string) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) return null;
        const results: any = await query({
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
                        orderlist.process_date,
                        orderlist.remarks,
                        orderlist.meterials_detail as materials_detail,
                        orderlist.meterials_cost as materials_cost,
                        technician.tid AS sp_id,
                        technician.name AS resource,
                        technician.phone AS resource_phone,
                        technician.company_name AS sp_name,
                        technician_area.thana AS sp_thana,
                        technician_area.district AS sp_district,
                        area.thana as area,
                        area.district as district,
                        customer.customer_name,
                        customer.customer_phone,
                        customer_address.address,
                        created_by.name as created_by,
                        completed_by.name as completed_by
                        
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
                    LEFT JOIN
                        area_technician ON area_technician.technician_areaid = technician.tid
                    LEFT JOIN
                        area technician_area ON technician_area.id = area_technician.technician_areaid
                    LEFT JOIN
                        customer ON customer.cid = orderlist.customer_id
                    LEFT JOIN
                        user created_by ON created_by.userid = orderlist.created_by
                    LEFT JOIN
                        user completed_by ON completed_by.userid = orderlist.completed_by
                        
                    WHERE
                        order_number = ?
                        AND technician_id = ?`,
            values: [id, userId],
        });
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
                results[0].service_quantity,
                results[0].service_id,
                results[0].service_id,
            ],
        });
        const comments: any = await query({
            query: `SELECT
                        *
                    FROM
                        order_comments
                    WHERE
                        order_id = ?
                    ORDER BY
                        created_on DESC;`,
            values: [results[0].orderid],
        });
        return {
            order: results[0],
            orderItems: orderItems,
            comments: comments,
        };
    } catch (e) {
        console.log(e);
        return { order: null, orderItems: [], comments: [] };
    }
}

async function deductBalance(amount: number, userId: string) {
    try {
        const results: any = await query({
            query: `UPDATE technician SET account_balance = account_balance - ? WHERE tid = ?`,
            values: [amount, userId],
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function updateStatus(id: string, status: string) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) return null;
        let process_date =
            status == "processing"
                ? `, process_date = '${new Date()
                      .toISOString()
                      .slice(0, 19)
                      .replace("T", " ")}'`
                : "";
        if (status == "complete") {
            const orderDetails: any = await getOrderDetails(id);

            //calculating item price
            let totalBill = orderDetails.orderItems.reduce(
                (acc: number, item: any) =>
                    acc + item.sale_price * item.quantity,
                0
            );

            //calculating reconciliation amount
            if (orderDetails.order.reconciliation_type == "ADD") {
                totalBill += orderDetails.order.reconciliation_amount;
            } else if (orderDetails.order.reconciliation_type == "DISCOUNT") {
                totalBill -= orderDetails.order.reconciliation_amount;
            }

            //calculating dfcl commission on service
            let deductAmount =
                totalBill * (orderDetails.order.dfcl_comission / 100);

            //calculating materials cost
            //totalBill += orderDetails.order.materials_cost

            //calculating dfcl commission on materials
            deductAmount += orderDetails.order.materials_cost * (15 / 100);

            const balancededucted = await deductBalance(
                deductAmount,
                orderDetails.order.sp_id
            );

            if (!balancededucted) return false;
        }

        const results: any = await query({
            query: `UPDATE orderlist SET status = ? ${process_date} WHERE order_number = ? AND technician_id = ?`,
            values: [status, id, userId],
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function submitComment(
    user: string,
    orderid: string,
    comment: string
) {
    try {
        const results: any = await query({
            query: `INSERT INTO order_comments (order_id, comment, commented_by, created_on) VALUES (?, ?, ?, ?)`,
            values: [
                orderid,
                comment,
                user,
                new Date().toISOString().slice(0, 19).replace("T", " "),
            ],
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
