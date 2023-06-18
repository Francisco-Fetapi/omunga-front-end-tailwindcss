import Button from "../Button/Button";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { mockArticles } from "@/mocks/ArticlesMock";
import ArticleItem from "./ArticleItem";
import ArticlesPagination from "./ArticlesPagination";

export default function ListArticles() {
  // TODO: list articles filtered. /q=search_query
  return (
    <div>
      <div className="flex justify-end">
        <Button variant="white" shadow iconEnd={<FaChevronDown />}>
          Filtrar por &nbsp;
        </Button>
      </div>

      <div className="mt-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <ArticleItem article={article} key={article.id} />
          ))}
        </div>
      </div>

      <ArticlesPagination />
    </div>
  );
}
