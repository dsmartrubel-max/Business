import { query } from "@/lib/db";
import { createSession } from "@/lib/session";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(request: Request) {
    //get the id from the request
    const body = await request.json();
    try {
        const results: any = await query({
            query: "SELECT tid, name, image, company_name, account_balance as balance, package.package_name as package_name FROM technician JOIN package ON technician.package_id = package.packid WHERE phone = ? AND password = ?",
            values: [body.phone, body.password],
        });
        if (results[0].tid) {
            await createSession(
                results[0].tid,
                results[0].name,
                results[0].image,
                results[0].package_name,
                results[0].balance,
                results[0].company_name
            );
        }
        return NextResponse.json(results[0]);
    } catch (e) {
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
