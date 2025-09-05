import { usePathname } from "next/navigation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { menuList } from "./menuList";
export default function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col font-sans">
                <Link
                    href="#"
                    className="flex items-center gap-2 font-semibold"
                >
                    <Image
                        src="/business.png"
                        alt="DFCL Business"
                        height={50}
                        width={100}
                    />
                    <span className="sr-only">DFCL Business</span>
                </Link>

                <nav className="grid gap-2 text-sm">
                    {menuList.map((item, index) =>
                        item.menu ? (
                            <Accordion
                                key={index}
                                type="single"
                                collapsible
                                className="w-full data-[state=open]:bg-secondary"
                            >
                                <AccordionItem
                                    value="item-1"
                                    className="border-0"
                                >
                                    <AccordionTrigger
                                        className={`[state=open]:bg-secondary border-0 hover:no-underline flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                                            pathname == "/dashboard" &&
                                            item.href == "/dashboard"
                                                ? "bg-primary text-primary-foreground hover:bg-primary"
                                                : "bg-secondary md:bg-transparent text-secondary-foreground hover:bg-muted hover:text-primary"
                                        }`}
                                    >
                                        <span className="flex gap-3">
                                            {item.icon}
                                            {item.name}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="ml-5 py-2 grid gap-2">
                                        {item.menu.map(
                                            (subItem: any, idx: any) => (
                                                <SheetTrigger key={idx} asChild>
                                                    <Link
                                                        href={subItem.href}
                                                        className={` flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                                                            pathname ==
                                                                "/dashboard" &&
                                                            subItem.href ==
                                                                "/dashboard"
                                                                ? "bg-primary text-primary-foreground hover:bg-primary"
                                                                : pathname.startsWith(
                                                                      subItem.href
                                                                  ) &&
                                                                  subItem.href !=
                                                                      "/dashboard"
                                                                ? "bg-primary text-primary-foreground hover:bg-primary"
                                                                : "bg-secondary md:bg-transparent text-secondary-foreground hover:bg-muted hover:text-primary"
                                                        }`}
                                                    >
                                                        {subItem.icon}
                                                        {subItem.name}
                                                    </Link>
                                                </SheetTrigger>
                                            )
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ) : (
                            <SheetTrigger key={index} asChild>
                                <Link
                                    href={item.href}
                                    className={` flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                                        pathname == "/dashboard" &&
                                        item.href == "/dashboard"
                                            ? "bg-primary text-primary-foreground hover:bg-primary"
                                            : pathname.startsWith(item.href) &&
                                              item.href != "/dashboard"
                                            ? "bg-primary text-primary-foreground hover:bg-primary"
                                            : "bg-secondary md:bg-transparent text-secondary-foreground hover:bg-muted hover:text-primary"
                                    }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </SheetTrigger>
                        )
                    )}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
