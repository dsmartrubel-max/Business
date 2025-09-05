import PageTitle from "@/components/reusable/pageTitle";
import { Alert } from "@/components/ui/alert";
import Link from "next/link";

export default function CareerPage() {
    return (
        <>
            <div className="bg-secondary py-12 md:py-24 lg:py-32">
                <PageTitle title="Offers" />
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 lg:py-32">
                <h2 className="text-xl font-bold">
                    <Alert>
                        No offer available at the moment.{" "}
                        <Link href="/contact" className="underline">
                            Contact us
                        </Link>{" "}
                        for any query.
                    </Alert>
                </h2>
            </div>
        </>
    );
}
