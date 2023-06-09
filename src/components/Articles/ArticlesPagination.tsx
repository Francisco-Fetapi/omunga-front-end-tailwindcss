import { usePagination } from "@mantine/hooks";
import Pagination from "../Pagination/Pagination";

export default function ArticlesPagination() {
  const pagination = usePagination({ total: 10, initialPage: 1 });

  return <Pagination pagination={pagination} />;
}
