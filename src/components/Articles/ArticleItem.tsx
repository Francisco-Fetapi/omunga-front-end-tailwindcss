import { Article } from "@/entities/Article";

interface ArticleItem {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItem) {
  return (
    <div className="h-[300px] bg-white shadow-2xl rounded-xl ">
      {article.user.name}
    </div>
  );
}
