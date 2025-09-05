import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }: { data: any }) {
    const t = useTranslations("blog");
    return (
        <Card className="overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <CardHeader className="p-0">
                <Image
                    src={data.image}
                    alt={data.title}
                    height={1600}
                    width={900}
                    className="aspect-video object-cover object-center"
                />
            </CardHeader>
            <CardContent className="p-6 h-full">
                <div className="h-full flex flex-col gap-3 ">
                    <p className="text-2xl font-bold text-primary">
                        {data.title}
                    </p>
                    <p className="mt-auto">{t("date")} </p>
                    <Link href={"/blog/" + data.id} className="w-full">
                        <Button className="w-full font-bold">
                            {t("viewMore")}
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
