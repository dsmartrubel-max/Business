"use client";

import { BottomBar } from "./(_navigation)/bottomBar";
import Header from "./(_navigation)/header";
import SideBar from "./(_navigation)/sidebar";
import { useState } from "react";
export function MenuContext({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) {
    const [sideBarClosed, setSideBarClosed] = useState(false);
    const toggleSideBar = () => {
        setSideBarClosed(!sideBarClosed);
    };
    return (
        <div
            className={`font-sans grid ${
                !sideBarClosed &&
                " md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
            } h-screen w-full max-w-full overflow-x-clip`}
        >
            <SideBar sideBarClosed={sideBarClosed} />
            <div className="w-full max-w-full relative flex flex-col">
                <Header session={session} toggler={toggleSideBar} />
                <main className="bg-gray-100 w-full max-w-full flex flex-1 flex-col gap-4 p-4 lg:gap-4 lg:p-4">
                    {children}
                </main>
                <BottomBar />
            </div>
        </div>
    );
}
