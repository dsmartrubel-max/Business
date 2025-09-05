"use server";

import { query } from "../db";
import { getSession } from "../session";

export async function getNomineeList() {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) {
            return [];
        }
        const data: any = await query({
            query: "SELECT id, name, image FROM nominee WHERE technician_id = ?",
            values: [userId],
        });
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getNomineeDetail(id: number) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) {
            return {};
        }
        const data: any = await query({
            query: "SELECT * FROM nominee WHERE ID=?",
            values: [id],
        });
        return data[0];
    } catch (e) {
        console.log(e);
        return {};
    }
}
