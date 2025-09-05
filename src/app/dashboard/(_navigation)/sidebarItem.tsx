import { usePathname } from "next/navigation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
export default function SideBarMenuItem({ item }: { item: any }) {
    const pathname = usePathname();
    if (item.menu) {
        return (
            <Accordion
                type="single"
                collapsible
                className="w-full data-[state=open]:bg-secondary"
            >
                <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger
                        className={`[state=open]:bg-secondary border-0 hover:no-underline flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                            pathname == "/dashboard" &&
                            item.href == "/dashboard"
                                ? "bg-primary text-primary-foreground hover:bg-primary"
                                : pathname.startsWith(item.href) &&
                                  item.href != "/dashboard"
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
                        {item.menu.map((subItem: any, idx: any) => (
                            <SideBarMenuItem key={idx} item={subItem} />
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    }
    return (
        <Link
            href={item.href}
            className={` flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                pathname == "/dashboard" && item.href == "/dashboard"
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
    );
}
