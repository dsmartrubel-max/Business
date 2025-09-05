"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal } from "lucide-react";
import { submitComment } from "@/lib/actions/order";

export default function NewComment({
    user,
    orderid,
}: {
    user: any;
    orderid: string;
}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        setError("");
        if (formData.get("comment") == "") {
            setLoading(false);
            return;
        }
        const submitted = await submitComment(
            user.name,
            orderid,
            formData.get("comment") as string
        );
        if (submitted) {
            if (document.getElementById("commentBox")) {
                (
                    document.getElementById("commentBox") as HTMLInputElement
                ).value = "";
            }
            router.refresh();
            setLoading(false);
        } else {
            setError("Failed to submit comment");
            setLoading(false);
        }
    };

    return (
        <Card className="">
            <CardContent className="px-3 md:px-6 py-3 flex items-start gap-3">
                <Avatar className="size-8">
                    <AvatarImage
                        src={`https://admin.dfclbd.com/media/resource_images/${user.image}`}
                        alt={user.name}
                    />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <form
                    action={handleSubmit}
                    className="w-full flex items-end flex-col md:flex-row gap-3"
                >
                    <Textarea
                        name="comment"
                        id="commentBox"
                        className="w-full min-h-9"
                        rows={1}
                        placeholder="Add a comment..."
                        disabled={loading}
                    />
                    {loading}
                    <Button className="mt-auto" disabled={loading}>
                        {loading ? (
                            "Sending..."
                        ) : (
                            <>
                                <SendHorizonal className="size-5 mr-2" /> Send
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
