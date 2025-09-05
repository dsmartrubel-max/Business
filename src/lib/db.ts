import mysql from "mysql2/promise";

export async function query({
    query,
    values = [],
}: {
    query: string;
    values?: any[];
}) {
    let dbCredentials: any = {
        host: process.env.MYSQL_HOST as string,
        database: process.env.MYSQL_DATABASE as string,
        user: process.env.MYSQL_USER as string,
        password: process.env.MYSQL_PASSWORD as string,
    };

    if (process.env.NODE_ENV != "production") {
        dbCredentials["port"] = process.env.MYSQL_PORT as string;
    }

    const dbconnection = await mysql.createConnection(dbCredentials);

    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error: any) {
        throw Error(error.message);
    }
}
