"use server";
import { createSession, getSession } from "../session";
import { query } from "../db";

export async function spInfo() {
    try {
        const session = await getSession();
        const results: any = await query({
            query: "SELECT tid, name, image, company_name, account_balance as balance, package.package_name as package_name, package.commission as comission, pkg_start_date, status, verification, is_online FROM technician JOIN package ON technician.package_id = package.packid WHERE tid = ?",
            values: [session?.userId],
        });
        if (results[0].tid) {
            return results[0];
        }
        return session;
    } catch (e) {
        return {};
    }
}

export async function spProfile() {
    try {
        const session = await getSession();
        const results: any = await query({
            query: "SELECT * FROM technician WHERE tid = ?",
            values: [session?.userId],
        });
        if (results[0].tid) {
            return results[0];
        }
        return session;
    } catch (e) {
        return {};
    }
}

export async function swithOnlineStatus(status: string) {
    try {
        const session = await getSession();
        const results: any = await query({
            query: "UPDATE technician SET is_online = ? WHERE tid = ?",
            values: [status, session?.userId],
        });
        return results;
    } catch (e) {
        return { error: e };
    }
}
