export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-cal font-bold text-center">
            {title}
        </h1>
    );
}
