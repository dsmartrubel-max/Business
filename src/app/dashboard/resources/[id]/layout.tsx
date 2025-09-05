import PageTitle from "@/components/reusable/pageTitle";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ResourceTabs from "./tabs";
import ComingSoon from "@/components/reusable/dashboard/comingSoon";
import { getResourceLayout } from "@/lib/actions/resource";
import { Badge } from "@/components/ui/badge";

export default async function ResourceLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {
        id: number;
    };
}) {
    const resource = await getResourceLayout(params.id);

    // return <ComingSoon/>

    return (
        <div className="grid gap-4 w-full max-w-6xl mx-auto">
            <Link href="/dashboard/resources">
                <Button
                    className="flex items-center gap-3"
                    variant="outline"
                    size="sm"
                >
                    <ChevronLeft />
                    Back to Resource List
                </Button>
            </Link>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-cal">
                    {resource.name}
                </h1>
            </div>
            <ResourceTabs resource={resource} />
            {children}
        </div>
    );
}
