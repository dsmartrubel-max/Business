import PageTitle from "@/components/reusable/pageTitle";
import BlogCard from "@/components/reusable/blog/card";
import { Alert } from "@/components/ui/alert";
import Link from "next/link";
const blogs = [
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
];
export default function ContactPage() {
    return (
        <>
            <div className="bg-secondary py-12 md:py-24 lg:py-32">
                <PageTitle title="Blog" />
            </div>
            {/* <div className=" py-12 md:py-24 lg:py-32 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((item, idx) => (
                    <BlogCard key={idx} data={item} />
                ))}
            </div> */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 lg:py-32">
                <h2 className="text-xl font-bold">
                    <Alert>No blog available.</Alert>
                </h2>
            </div>
        </>
    );
}
