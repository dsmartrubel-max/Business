import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        id: string;
        user: {
            id: string;
            phone: string;
            name: string;
            picture: string;
        };
    }

    interface User {
        id: string;
        phone: string;
        name: string;
        picture: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        phone: string;
        name: string;
        picture: string;
    }
}
