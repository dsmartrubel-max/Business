"use server";

import { query } from "../db";
import { getSession } from "../session";

export async function getResourceList() {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) {
            return [];
        }
        const data: any = await query({
            query: "SELECT id, name, status, image FROM resource WHERE technician_id = ?",
            values: [userId],
        });
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getResourceLayout(id: number) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) {
            return [];
        }
        const data: any = await query({
            query: "SELECT id, name, status FROM resource WHERE id = ?",
            values: [id],
        });
        if (data.length === 0) {
            return {};
        }
        return data[0];
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getResourceDetails(id: number) {
    try {
        const userId = await getSession().then((session) => session?.userId);
        if (!userId) {
            return [];
        }
        const data: any = await query({
            query: "SELECT * FROM resource WHERE id = ?",
            values: [id],
        });
        if (data.length === 0) {
            return {};
        }
        return data[0];
    } catch (e) {
        console.log(e);
        return {};
    }
}
