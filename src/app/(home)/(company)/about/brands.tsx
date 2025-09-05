import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
    const t = useTranslations("about.brands");
    const brands = [
        {
            logo: "/images/logo/dfcl/dfcl.png",
            name: "DFCL",
            href: "https://dfcl.com.bd",
        },
        {
            logo: "/images/logo/dfcl/business.png",
            name: "DFCL Business",
            href: "https://business.dfclbd.com",
        },
        {
            logo: "/images/logo/dfcl/business.png",
            name: "DFCL Resource",
            href: "https://resource.dfclbd.com",
        },
        {
            logo: "/images/logo/dfcl/bondhu.png",
            name: "DFCL Bondhu",
            href: "https://bondhu.dfclbd.com",
        },
        {
            logo: "/images/logo/dfcl/dsmart.png",
            name: "dSmart IT",
            href: "https://dsmart.dfclbd.com",
        },
        {
            logo: "/images/logo/dfcl/dfcl.png",
            name: "DFCL Mall",
            href: "https://mall.dfcl.com.bd",
        },
    ];
    return (
        <section className="">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-cal font-bold">
                {t("title")}
            </h2>

            <div className="w-full max-w-7xl mx-auto mt-8 text-lg text-justify">
                <div className="">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full "
                    >
                        <CarouselContent>
                            {brands.map((brand, id) => (
                                <CarouselItem
                                    key={id}
                                    className="basis-1/2 md:basis-1/6"
                                >
                                    <Link href={brand.href} key={id}>
                                        <Card className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border-2 hover:border-primary">
                                            <CardContent className="p-4 text-center">
                                                {/* <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        
                                        
                                        width={300}
                                        height={200}
                                        className="w-full"
                                        /> */}
                                                <h3 className="font-cal text-lg md:text-xl">
                                                    {brand.name}
                                                </h3>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
