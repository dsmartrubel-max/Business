import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function TryUsSection() {
    const t = useTranslations("landing.tryus");
    return (
        <section
            className={`w-full py-12 md:py-24 lg:py-32 bg-[url('/images/banner/banner_solution_1.webp')] bg-cover bg-center bg-black/60 bg-blend-overlay text-white`}
        >
            <div className="container px-4 md:px-6 gap-12 flex flex-col lg:flex-row items-center justify-between">
                <div className="max-w-3xl flex flex-col gap-6 text-center lg:text-start">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
                        {t("title")}
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl">
                        {t("description")}
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="/login">
                        <Button size="lg" variant="secondary">
                            {t("login")}
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button size="lg" variant="default">
                            {t("signup")}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
