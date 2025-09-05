"use server";
import "server-only";
import { cookies } from "next/headers";

import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";

const secretKey = process.env.AUTH_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.log("Failed to verify session");
    }
}

export async function createSession(
    userId: string,
    name: string,
    image: string,
    package_name: string,
    balance: number,
    company_name: string
) {
    const expiresAt = new Date(Date.now() + 6 * 60 * 60 * 1000);
    const session = await encrypt({
        userId,
        name,
        image,
        package_name,
        expiresAt,
        balance,
        company_name,
    });
    cookies().set("usersession", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });
}

export async function getSession() {
    const session = cookies().get("usersession")?.value;
    const payload = await decrypt(session);

    if (!session || !payload) {
        return {}
    }

    return payload;
}

export async function updateSession() {
    const data = await getSession();
    if (!data) {
        return;
    }

    const res = await fetch(
        `${process.env.BASE_URL}/api/login/refresh?userId=${data?.userId}`
    );
    const session = await res.json();
    if (session.tid) {
        return session;
    }
    return null;
}

export async function deleteSession() {
    cookies().delete("usersession");
}
