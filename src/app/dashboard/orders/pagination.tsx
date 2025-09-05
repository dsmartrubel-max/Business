"use client";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState, useTransition } from "react";

export default function PaginationComponent({
    page,
    total,
    setPage,
}: {
    page: { page: number; total: number };
    total: number;
    setPage: any;
}) {
    const [currentPage, setCurrentPage] = useState(page.page);
    const [isPending, startTransition] = useTransition();
    const itemsPerPage = 10;
    const firstPage = 1;
    const lastPage = Math.ceil(total / itemsPerPage);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setCurrentPage(parseInt(params.get("page") as string) || 1);
    }, [page.page]);

    const handlePageChange = (value: number) => {
        startTransition(() => {
            const params = new URLSearchParams(window.location.search);
            if (value === 1) {
                setPage({ ...page, page: 1 });
                params.delete("page");
            } else {
                setPage({ ...page, page: value });
                params.set("page", value.toString());
            }
            setCurrentPage(value);
            window.history.pushState(
                {},
                "",
                `${window.location.pathname}?${params}`
            );
        });
    };
    return (
        <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-between">
            <div className="text-xs text-muted-foreground">
                Showing{" "}
                <strong>
                    {(currentPage - 1) * 10 + 1}-
                    {currentPage * 10 > total ? total : currentPage * 10}
                </strong>{" "}
                of <strong>{total}</strong> orders
            </div>
            <Pagination className="w-auto mx-0">
                {isPending ? (
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => handlePageChange(currentPage)}
                                isActive={false}
                            >
                                {currentPage}
                            </PaginationLink>
                        </PaginationItem>
                    </PaginationContent>
                ) : (
                    <PaginationContent>
                        {/* Previous Button */}
                        {currentPage > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }
                                />
                            </PaginationItem>
                        )}

                        {/* First Page */}
                        {currentPage >= 2 && (
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => handlePageChange(firstPage)}
                                    isActive={currentPage === firstPage}
                                >
                                    {firstPage}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {/* Ellipsis Before Current Page */}
                        {currentPage > firstPage + 2 && (
                            <PaginationItem>
                                <PaginationEllipsis></PaginationEllipsis>
                            </PaginationItem>
                        )}

                        {/* Current Page */}
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => handlePageChange(currentPage)}
                                isActive
                            >
                                {currentPage}
                            </PaginationLink>
                        </PaginationItem>

                        {/* Ellipsis After Current Page */}
                        {currentPage < lastPage - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis></PaginationEllipsis>
                            </PaginationItem>
                        )}

                        {/* Last Page */}
                        {currentPage < lastPage && (
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => handlePageChange(lastPage)}
                                    isActive={currentPage === lastPage}
                                >
                                    {lastPage}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {/* Next Button */}
                        {currentPage < lastPage && (
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() =>
                                        handlePageChange(currentPage + 1)
                                    }
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                )}
            </Pagination>
        </div>
    );
}
