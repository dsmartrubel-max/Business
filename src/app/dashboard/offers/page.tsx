import { spInfo } from "@/lib/actions/sp";
import SummaryCard from "./card";

export default async function Offers() {
    const sp = await spInfo();
    const offerList = [
        {
            title: "Starter Pack",
            description: "৳10000 রিচার্জ করুন আর বোনাস পান ৳",
            badge: "৳500 Bonus",
            amount: 10000,
            percentage: 1.5,
        },

        {
            title: "Easy Pack",
            description: "৳২০০০০ রিচার্জ করুন আর বোনাস পান ৳১০০০",
            badge: "৳1000 Bonus",
            amount: 20000,
            bonus: 1000,
            percentage: 1.75,
        },
        {
            title: "Quick Pack",
            description: "৳৩০০০০ রিচার্জ করুন আর বোনাস পান ৳১৫০০",
            badge: "৳1500 Bonus",
            amount: 30000,
            percentage: 2,
        },
        {
            title: "Saver Pack",
            description: "৳৪০০০০ রিচার্জ করুন আর বোনাস পান ৳২০০০",
            badge: "৳2000 Bonus",
            amount: 40000,
            percentage: 2.25,
        },
        {
            title: "Bonus Pack",
            description: "৳৫০০০০ রিচার্জ করুন আর বোনাস পান ৳২৫০০",
            badge: "৳2500 Bonus",
            amount: 50000,
            percentage: 2.5,
        },
        {
            title: "Super Saver Pack",
            description: "৳৬০০০০ রিচার্জ করুন আর বোনাস পান ৳৩০০০",
            badge: "৳3000 Bonus",
            amount: 60000,
            percentage: 2.75,
        },
        // {
        //     title: "Extra Pack",
        //     description: "৳৭০০০০ রিচার্জ করুন আর বোনাস পান ৳৩৫০০",
        //     badge: "৳3500 Bonus",
        //     amount: 70000,
        // },
        // {
        //     title: "Mega Pack",
        //     description: "৳৮০০০০ রিচার্জ করুন আর বোনাস পান ৳৪০০০",
        //     badge: "৳4000 Bonus",
        //     amount: 80000,
        // },
        // {
        //     title: "Super Saver Pack",
        //     description: "৳৯০০০০ রিচার্জ করুন আর বোনাস পান ৳৪৫০০",
        //     badge: "৳4500 Bonus",
        //     amount: 90000,
        // },
        // {
        //     title: "Premium Pack",
        //     description: "৳১০০০০০ রিচার্জ করুন আর বোনাস পান ৳৫০০০",
        //     badge: "৳5000 Bonus",
        //     amount: 100000,
        // },
    ];

    const bogoOffer = [
        {
            title: "Value Pack",
            description:
                "৳50,000 রিচার্জ করুন আর ফ্রিতে পান সিলভার স্টার প্যাকেজ",
            badge: "Startup",
            amount: 50000,
        },
        {
            title: "Mega Pack",
            description:
                "৳125,000 রিচার্জ করুন আর ফ্রিতে পান সিলভার স্টার প্যাকেজ",
            badge: "Silver Star",
            amount: 125000,
        },
        {
            title: "Premium Pack",
            description:
                "৳200,000 রিচার্জ করুন আর ফ্রিতে পান গোল্ড স্টার প্যাকেজ",
            badge: "Gold Star",
            amount: 200000,
        },
    ];

    return (
        <div className="max-w-6xl w-full mx-auto grid gap-4 ">
            <div>
                <h2 className="text-xl font-cal md:text-2xl lg:text-3xl">
                    Quick Benefit Offer
                </h2>
            </div>
            <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {offerList.map((offer, idx) => (
                    <div key={idx}>
                        <SummaryCard
                            offer={offer}
                            type="recharge_offer"
                            comission={sp.comission}
                        />
                    </div>
                ))}
            </div>
            <div>
                <h2 className="mt-3 text-xl font-cal md:text-2xl lg:text-3xl">
                    Buy 1 Get 1 Offer
                </h2>
            </div>
            <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {bogoOffer.map((offer, idx) => (
                    <div key={idx}>
                        <SummaryCard
                            offer={offer}
                            type="buy_one_get_one_offer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
