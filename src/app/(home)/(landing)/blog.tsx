import BlogCard from "@/components/reusable/blog/card";
import { Alert } from "@/components/ui/alert";
import { useTranslations } from "next-intl";
export default function BlogSection({
    data,
}: {
    data: { id: number; title: string; date: string; image: string }[];
}) {
    const t = useTranslations("landing");
    return (
        <div className="w-full max-w-7xl mx-auto px-8 py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center gap-4 md:gap-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                {t("blog")}
            </h1>
            {/* <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, idx) => (
                    <BlogCard key={idx} data={item} />
                ))}
            </div> */}
            <Alert>No blog post found!</Alert>
        </div>
    );
}
