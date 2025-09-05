"use server";

import { query } from "../db";

export async function getPackageList() {
    try {
        const data: any = await query({
            query: `Select * FROM package WHERE package_status = "ACTIVE"`,
            values: [],
        });
        return data;
    } catch (e) {
        return [];
    }
}
