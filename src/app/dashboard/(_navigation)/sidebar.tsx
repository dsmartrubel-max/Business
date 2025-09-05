import Image from "next/image";
import Link from "next/link";
import { menuList } from "./menuList";
import SideBarMenuItem from "./sidebarItem";

export default function SideBar({ sideBarClosed }: { sideBarClosed: boolean }) {
    return (
        <div
            className={` ${
                sideBarClosed
                    ? "hidden"
                    : "relative hidden border-r bg-muted/40 md:block "
            }`}
        >
            <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] py-2 lg:px-6">
                    <Link
                        href="/"
                        className="w-full h-full flex items-center justify-center gap-2 font-semibold"
                    >
                        <Image
                            src="/business.png"
                            alt="DFCL Business"
                            height={60}
                            width={120}
                            className="h-full w-auto object-contain"
                        />
                        <span className="sr-only">DFCL Business</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-xs md:text-sm font-medium lg:px-4 gap-1">
                        {menuList.map((item, index) => (
                            <div key={index}>
                                <SideBarMenuItem item={item} />
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
