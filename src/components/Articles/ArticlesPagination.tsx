import { usePagination } from "@mantine/hooks";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ArticlesPagination() {
  const pagination = usePagination({ total: 10, initialPage: 1 });
  const currentPage = pagination.active;

  return (
    <div className="mt-8 flex items-center justify-end select-none">
      <div className="flex items-center gap-2">
        <div>
          {pagination.range.map((page, k) => (
            <span
              className={` px-2 text-lg ${
                page === currentPage ? "text-purple" : "text-gray-500"
              } ${page !== "dots" ? "cursor-pointer" : ""}`}
              onClick={
                page !== "dots" ? () => pagination.setPage(page) : undefined
              }
              key={k}
            >
              {page === "dots" ? "..." : page}
            </span>
          ))}
        </div>
        <div className="bg-white rounded-3xl px-1 py-2 shadow-md shadow-black/50 width-[150px] ">
          <div className="flex gap-5 items-center">
            <FaChevronLeft
              className="cursor-pointer text-gray-500"
              onClick={pagination.previous}
            />
            <FaChevronRight
              className="cursor-pointer text-gray-500"
              onClick={pagination.next}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
