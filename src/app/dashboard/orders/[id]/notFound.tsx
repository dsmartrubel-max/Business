export default function NotFound() {
    return (
        <div className="h-full flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-center text-3xl">404</h1>
            <p className="text-sm text-center ">
                Sorry, the order you are looking for could not be found
            </p>
        </div>
    );
}
