"use server";

import { query } from "../db";
import { getSession } from "../session";

export async function getLocationList() {
    try {
        const session = await getSession();
        if (!session.userId) {
            return [];
        }

        const data: any = await query({
            query: `
                SELECT
                    area.id as area_id,
                    area.thana as area_name,
                    district.id as district_id,
                    district.district as district_name,
                    division.id as division_id,
                    division.division as division_name
                FROM area_technician
                JOIN area on area.id=area_technician.technician_areaid
                JOIN district ON district.district=area.district
                JOIN division ON division.division=district.division
                WHERE area_technician= ?;
            `,
            values: [session.userId],
        });

        // Structure the data
        const result = data.reduce((acc: any, row: any) => {
            let division = acc.find((c: any) => c.id === row.division_id);
            if (!division) {
                division = {
                    id: row.division_id,
                    name: row.division_name,
                    districts: [],
                };
                acc.push(division);
            }

            let district = division.districts.find(
                (sc: any) => sc.id === row.district_id
            );
            if (!district) {
                district = {
                    id: row.district_id,
                    name: row.district_name,
                    areas: [],
                };
                division.districts.push(district);
            }

            district.areas.push({
                id: row.area_id,
                name: row.area_name,
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
