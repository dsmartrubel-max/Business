import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://business.dfclbd.com/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://business.dfclbd.com/login",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/signup",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },

        {
            url: "https://business.dfclbd.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/services",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: "https://business.dfclbd.com/contact",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/code-of-conduct",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/payment-methods",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/copyright-policy",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/privacy-policy",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/terms-of-use",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://business.dfclbd.com/trademark-policy",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
