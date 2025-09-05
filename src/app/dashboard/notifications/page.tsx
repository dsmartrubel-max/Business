import PageTitle from "@/components/reusable/pageTitle";
import { NotificationItem } from "./dialog";
import { getNotifications } from "./data";
import ComingSoon from "@/components/reusable/dashboard/comingSoon";
export default async function Notifications() {
    const data = await getNotifications();
    return <ComingSoon/>
    return (
        <div className="grid gap-4">
            <PageTitle title="Notifications" />
            <div className="grid gap-2">
                {data.map((item, idx) => (
                    <div key={idx}>
                        <NotificationItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
