import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function GovtLogo() {
    const t = useTranslations("landing");
    const methods = [
        {
            name: "RJSC",
            icon: "/images/logo/govt/govt.svg",
            href: "https://roc.gov.bd/",
        },
        {
            name: "DSCC",
            icon: "/images/logo/govt/dscc.png",
            href: "https://dscc.gov.bd/",
        },
        {
            name: "NBR",
            icon: "/images/logo/govt/govt.svg",
            href: "https://nbr.gov.bd/",
        },
        {
            name: "DPDT",
            icon: "/images/logo/govt/dpdt.png",
            href: "https://dpdt.gov.bd/",
        },
        {
            name: "DBID",
            icon: "/images/logo/govt/dbid.png",
            href: "https://dbid.gov.bd/",
        },
        {
            name: "e-CAB",
            icon: "/images/logo/govt/ecab.png",
            href: "https://e-cab.net/",
        },
    ];
    return (
        <div className="w-full">
            <div className="w-full max-w-7xl mx-auto px-8 py-8 md:py-12 flex flex-col items-center justify-center gap-6 md:gap-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
                    {t("approvedTitle")}
                </h1>
                <div className="w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-3 md:gap-4">
                    {methods.map((method, idx) => (
                        <Link
                            key={idx}
                            href={method.href}
                            className="h-18 py-4 bg-white rounded-lg shadow-lg border-2 hover:border-primary flex flex-col items-center justify-center gap-2"
                            target="_blank"
                        >
                            <div className="h-full flex flex-col items-center justify-center">
                                <Image
                                    src={method.icon}
                                    alt={method.name}
                                    width={100}
                                    height={100}
                                    className="w-3/5 max-h-4/5"
                                />
                            </div>
                            <span className="mt-auto text-sm md:text-base font-semibold text-center">
                                {method.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
