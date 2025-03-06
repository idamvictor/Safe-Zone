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

type navigationProps = {
  page: number;
  setPages: (page: number) => void;
  noOfPages: number;
};

export default function PaginationDemo({
  page,
  setPages,
  noOfPages,
}: navigationProps) {
  // Generate array of page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always show first page
    pageNumbers.push(1);

    // Show ellipsis if needed
    if (page > 3) {
      pageNumbers.push("ellipsis-start");
    }

    // Show pages around current page
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(noOfPages - 1, page + 1);
      i++
    ) {
      if (i > 1 && i < noOfPages) {
        pageNumbers.push(i);
      }
    }

    // Show ellipsis if needed
    if (page < noOfPages - 2) {
      pageNumbers.push("ellipsis-end");
    }

    // Always show last page
    if (noOfPages > 1) {
      pageNumbers.push(noOfPages);
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= noOfPages) {
      setPages(page);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page - 1);
              }}
              aria-disabled={page === 1}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {getPageNumbers().map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <PaginationItem key={`${page}-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            const pageNum = page as number;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  isActive={page === pageNum}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(pageNum);
                  }}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page + 1);
              }}
              aria-disabled={page === noOfPages}
              className={
                page === noOfPages ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="text-center mt-4 text-sm text-muted-foreground">
        Page {page} of {noOfPages}
      </div>
    </div>
  );
}
