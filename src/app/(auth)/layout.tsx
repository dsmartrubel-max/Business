export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary font-sans">
            <div className="w-full max-w-sm">{children}</div>
        </div>
    );
}
