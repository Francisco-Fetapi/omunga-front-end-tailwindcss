import { usePagination } from "@mantine/hooks";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  pagination: ReturnType<typeof usePagination>;
}

export default function Pagination({ pagination }: PaginationProps) {
  const currentPage = pagination.active;
  return (
    <div className="mt-12 flex items-center justify-end select-none">
      <div className="flex items-center gap-2">
        <div className="join">
          <button
            className="join-item btn btn-primary text-white"
            onClick={() => pagination.setPage(currentPage - 1)}
          >
            <FaChevronLeft />
          </button>
          {pagination.range.map((page, k) => (
            <button
              className={` join-item btn btn-square ${
                page !== "dots" ? "cursor-pointer" : ""
              }
              ${currentPage === page ? "!bg-black text-white" : ""}
              `}
              onClick={
                page !== "dots" ? () => pagination.setPage(page) : undefined
              }
              key={k}
              name="options"
              aria-label="1"
            >
              {page === "dots" ? "..." : page}
            </button>
          ))}
          <button
            className="join-item btn btn-primary text-white"
            onClick={() => pagination.setPage(currentPage + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
