export type Locale = (typeof locales)[number];

export const locales = ["bn", "en"] as const;
export const defaultLocale: Locale = "en";
