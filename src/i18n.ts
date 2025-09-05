import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./services/locale";

export default getRequestConfig(async () => {
    const locale = await getUserLocale();
    if (!locale || !["bn", "en"].includes(locale)) {
        return {
            locale: "en",
            messages: (await import("../dictionary/en.json")).default,
        };
    }

    return {
        locale,
        messages: (await import(`../dictionary/${locale}.json`)).default,
    };
});
