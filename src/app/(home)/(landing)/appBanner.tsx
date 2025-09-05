import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AppBanner() {
    const t = useTranslations("landing.appSection");

    return (
        <div className="w-full pt-32 px-8 lg:px-16 bg-primary md:bg-[url('/images/banner/banner_sea.webp')] md:bg-black/60 bg-blend-overlay bg-no-repeat bg-cover bg-center text-primary-foreground">
            <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8">
                <div className="flex flex-col items-center lg:items-start justify-center gap-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start">
                        {t("title")}
                    </h1>
                    <Link href="/signup">
                        <Button
                            size="lg"
                            className="font-bold"
                            variant="secondary"
                        >
                            {t("button")}
                        </Button>
                    </Link>
                </div>
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/ss/business1.webp"
                        alt="app"
                        height={600}
                        width={300}
                    />
                </div>
            </div>
        </div>
    );
}
