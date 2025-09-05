export async function getNotifications() {
    return [
        {
            title: "You have a new order.",
            description: "Area: Basabo",
            read: true,
            href: "/dashboard/orders/1010",
        },
        {
            title: "You have a new order.",
            description: "Area: Basabo",
            read: false,
            href: "/dashboard/orders/1010",
        },
        {
            title: "You have a new order.",
            description: "Area: Basabo",
            read: true,
            href: "/dashboard/orders/1010",
        },
    ];
}
