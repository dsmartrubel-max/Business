"use server";

import { redirect } from "next/navigation";
import { query } from "../db";
import { getSession } from "../session";

export async function InitiatePayment(
    amount: number,
    trx_type?: string,
    bonus?: number,
    comment?: string
) {
    let paymentId = 0;
    try {
        const session = await getSession();
        if (session == null) {
            return { error: "Session not found" };
        }
        const type = trx_type ? trx_type : "wallet_recharge";
        const initiate: any = await query({
            query: "INSERT INTO transactions (sp_id, sp_name, amount, bonus, type, comment) VALUES (?, ?, ?, ?, ? ,?)",
            values: [
                session.userId,
                session.company_name,
                amount,
                bonus ? bonus : 0,
                type,
                comment ? comment : "",
            ],
        });
        paymentId = initiate.insertId;
    } catch (error) {
        return { error: error };
    }
    if (paymentId != 0) {
        redirect(`${process.env.PAYMENT_URL}?trxid=${paymentId}`);
    }
}
