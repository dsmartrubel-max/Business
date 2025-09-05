"use server";

import { query } from "../db";
import { getSession } from "../session";

export async function getServicesList() {
    try {
        const session = await getSession();
        if (!session.userId) {
            return [];
        }

        const data: any = await query({
            query: `
                SELECT
                    s.id as service_id,
                    s.service_name,
                    s.sale_price as price,
                    sc.id as subcategory_id,
                    sc.sub_category_name as subcategory_name,
                    c.id as category_id,
                    c.category_name as category_name
                FROM services_technician st
                JOIN services s ON s.id=st.service_id
                JOIN sub_category sc ON sc.id=s.sub_category_id
                JOIN category c ON c.id=sc.category_id
                WHERE technician_id = ?;
            `,
            values: [session.userId],
        });

        // Structure the data
        const result = data.reduce((acc: any, row: any) => {
            let category = acc.find((c: any) => c.id === row.category_id);
            if (!category) {
                category = {
                    id: row.category_id,
                    name: row.category_name,
                    subcategories: [],
                };
                acc.push(category);
            }

            let subcategory = category.subcategories.find(
                (sc: any) => sc.id === row.subcategory_id
            );
            if (!subcategory) {
                subcategory = {
                    id: row.subcategory_id,
                    name: row.subcategory_name,
                    services: [],
                };
                category.subcategories.push(subcategory);
            }

            subcategory.services.push({
                id: row.service_id,
                name: row.service_name,
                price: row.price,
            });

            return acc;
        }, []);

        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
        return [];
    }
}
