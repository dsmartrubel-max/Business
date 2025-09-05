import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/dashboard/",
        },
        sitemap: "https://business.dfclbd.com/sitemap.xml",
    };
}
