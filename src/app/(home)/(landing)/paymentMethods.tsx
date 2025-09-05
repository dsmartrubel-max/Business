import { useTranslations } from "next-intl";
import Image from "next/image";
import { methods } from "./methods";
export default function PaymentMethods() {
    const t = useTranslations("landing");
        
    return (
        <div className="w-full bg-secondary">
            <div className="w-full max-w-7xl mx-auto px-8 py-8 md:py-12 flex flex-col items-center justify-center gap-4 md:gap-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
                    {t("paymentTitle")}
                </h1>
                <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4">
                    {methods.map((method, idx) => (
                        <div
                            key={idx}
                            className="h-18 bg-white rounded-lg shadow-lg border flex items-center justify-center"
                        >
                            <Image
                                src={method.icon}
                                alt={method.name}
                                height={50}
                                width={50}
                                className="w-3/5 max-h-4/5 py-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
