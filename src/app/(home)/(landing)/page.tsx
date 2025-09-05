import type { Metadata } from "next";

import Image from "next/image";
import BannerSection from "./hero";
import SolutionSection from "./solutions";
import BlogSection from "./blog";
import PaymentMethods from "./paymentMethods";
import GovtLogo from "./govtLogo";
import AppBanner from "./appBanner";
import Offerings from "./offerings";
import TryUsSection from "./tryus";

export const metadata: Metadata = {
    description:
        "DFCL Business is a leading online platform designed to empower businesses in Bangladesh. Discover innovative solutions for self-business management, online transactions, and more.",
};
export default function HomePage() {
    const data = {
        banners: [
            {
                text: "আপনি কি ফ্রিজ, এসি, ওয়াশিং মেশিন, কিচেন হুড বা মাইক্রোওয়েভ মেরামতকারী?",
                image: "/images/banner/banner_top_1.webp",
                href: "#",
            },
            {
                text: "আপনি কি আপনার ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে জয়েন করে আপনার আয় বাড়াতে চান?",
                image: "/images/banner/banner_top_2.jpeg",
                href: "#",
            },
            {
                text: "আজই আপনার বিজনেসকে ডিজিটাল করুন এবং আয় কয়েকগুণ বৃদ্ধি করুন!",
                image: "/images/banner/banner_top_3.webp",
                href: "#",
            },
        ],
        blogs: [
            {
                id: 3,
                title: "টানা পঞ্চমবারের মতো দেশের সবচেয়ে সেরা ব্র্যান্ড বিকাশ। অনেক বড় একটা লাইন।",
                date: "",
                image: "https://www.bkash.com/uploaded_contents/blogs/thumb_images/thumbnail-photo-bkash-best-brand-5th-time_1703419782388.webp",
            },
            {
                id: 2,
                title: "টানা পঞ্চমবারের মতো দেশের সবচেয়ে সেরা ব্র্যান্ড বিকাশ",
                date: "",
                image: "https://www.bkash.com/uploaded_contents/blogs/thumb_images/photo-2_1691496911699.webp",
            },
            {
                id: 1,
                title: "টানা পঞ্চমবারের মতো দেশের সবচেয়ে সেরা ব্র্যান্ড বিকাশ",
                date: "",
                image: "https://www.bkash.com/uploaded_contents/blogs/thumb_images/400x300_1683829079486.webp",
            },
        ],
    };
    return (
        <>
            <BannerSection data={data.banners} />
            <SolutionSection />
            <TryUsSection />
            <Offerings />
            <AppBanner />
            <BlogSection data={data.blogs} />
            {/* <GovtLogo />
            <PaymentMethods /> */}
        </>
    );
}
