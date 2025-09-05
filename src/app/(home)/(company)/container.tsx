import PageTitle from "@/components/reusable/pageTitle";
import AboutMenu from "./menu";

export default function AboutContainer({
    children,
    title,
    bg,
}: {
    children: React.ReactNode;
    title: string;
    bg?: string;
}) {
    return (
        <div className="">
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className={`text-primary-foreground ${
                    bg
                        ? "bg-primary/60 bg-blend-overlay bg-center bg-cover"
                        : "bg-primary"
                } py-24 md:py-24 lg:py-32`}
            >
                <PageTitle title={title} />
            </div>
            <AboutMenu />
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 lg:py-8 flex flex-col gap-4 lg:gap-8">
                {children}
            </div>
        </div>
    );
}
