import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/session";
import NewComment from "./newComment";

export default async function CommentSection({
    comments,
    orderid,
}: {
    comments: any[];
    orderid: string;
}) {
    const user = await getSession();
    return (
        <div className="grid gap-4">
            <CardTitle>Comments</CardTitle>

            <div className="grid gap-3">
                <NewComment user={user} orderid={orderid} />
                {comments.length == 0 && (
                    <p className="text-sm">No comments found.</p>
                )}
                {comments.map((comment) => (
                    <Card key={comment.id}>
                        <CardContent
                            className={`px-3 md:px-6 py-3 flex items-center gap-3 ${
                                comment.id == 1
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                            }`}
                        >
                            <Avatar className="size-8">
                                <AvatarImage
                                    src={comment.commented_by}
                                    alt={comment.commented_by}
                                />
                                <AvatarFallback>
                                    {comment.commented_by[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">
                                        {comment.commented_by}
                                    </span>
                                    <span
                                        className={`text-sm ${
                                            comment.id == 1
                                                ? "text-primary-foreground"
                                                : "text-muted-foreground"
                                        }`}
                                    >
                                        {new Date(
                                            comment.created_on
                                        ).toLocaleString("en-BD", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                        })}
                                    </span>
                                </div>
                                <p className="text-sm">{comment.comment}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
