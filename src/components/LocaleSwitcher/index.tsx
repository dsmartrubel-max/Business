import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./Select";
import BDFlag from "./bd.svg";
import UKFlag from "./uk.svg";
export default function LocaleSwitcher() {
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: "en",
                    label: t("en"),
                    flag: UKFlag,
                },
                {
                    value: "bn",
                    label: t("bn"),
                    flag: BDFlag,
                },
            ]}
            label={t("label")}
        />
    );
}
