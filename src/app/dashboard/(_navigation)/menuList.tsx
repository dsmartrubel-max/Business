import {
    Home,
    Building,
    Box,
    Map,
    FolderCog,
    User,
    CreditCard,
    UserCheck,
    Blocks,
    ShoppingBag,
    Cog,
    Bell,
} from "lucide-react";
export const menuList = [
    {
        icon: <Home className="h-4 w-4" />,
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: <Building className="h-4 w-4" />,
        name: "Company",
        menu: [
            {
                icon: <Blocks className="h-4 w-4" />,
                name: "Package",
                href: "/dashboard/package",
            },
            {
                icon: <Building className="h-4 w-4" />,
                name: "Company Profile",
                href: "/dashboard/profile",
            },
            {
                icon: <Map className="h-4 w-4" />,
                name: "My Locations",
                href: "/dashboard/locations",
            },
            {
                icon: <FolderCog className="h-4 w-4" />,
                name: "My Services",
                href: "/dashboard/services",
            },
            {
                icon: <User className="h-4 w-4" />,
                name: "My Resources",
                href: "/dashboard/resources",
            },
            {
                icon: <UserCheck className="h-4 w-4" />,
                name: "My Nominee",
                href: "/dashboard/nominee",
            },
        ],
    },
    {
        icon: <Box className="h-4 w-4" />,
        name: "My Orders",
        href: "/dashboard/orders",
    },
    {
        icon: <CreditCard className="h-4 w-4" />,
        name: "Ledger Book",
        href: "/dashboard/transactions",
    },
    {
        icon: <User className="size-4" />,
        name: "My profile",
        href: "/dashboard/user",
    },
    {
        icon: <ShoppingBag className="size-4" />,
        name: "DFCL Shop",
        href: "/dashboard/shop",
    },
    {
        icon: <Bell className="size-4" />,
        name: "Notice",
        href: "/dashboard/notice",
    },
    {
        icon: <Cog className="size-4" />,
        name: "Settings",
        href: "/dashboard/settings",
    },
];
