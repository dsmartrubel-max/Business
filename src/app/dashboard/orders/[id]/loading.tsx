import { LoadingCircle } from "@/components/icons";

export default function Loading() {
    return (
        <div className="size-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-2">
            <LoadingCircle />
            <h3 className="font-bold">Loading...</h3>
        </div>
    );
}
