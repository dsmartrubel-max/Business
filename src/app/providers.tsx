"use client";
import { usePathname } from "next/navigation";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const pathanme = usePathname();
    return (
        <>
            {children}
            <Next13ProgressBar
                height="4px"
                color={
                    pathanme.startsWith("/dashboard") ? "#000027" : "#ffffff"
                }
                options={{ showSpinner: true }}
                showOnShallow
            />
        </>
    );
};

export default Providers;
