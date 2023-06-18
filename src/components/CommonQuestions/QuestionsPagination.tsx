import { usePagination } from "@mantine/hooks";
import Pagination from "../Pagination/Pagination";

export default function QuestionsPagination() {
  const pagination = usePagination({ total: 15, initialPage: 1 });

  return <Pagination pagination={pagination} />;
}
