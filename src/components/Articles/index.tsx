import ArticleHeader from "./ArticleHeader";
import ListArticles from "./ListArticles";

interface ArticlesProps {
  showHeader?: boolean;
}

export default function Articles({ showHeader = true }: ArticlesProps) {
  return (
    <div className="gap-lr">
      {showHeader && <ArticleHeader />}
      <ListArticles />
    </div>
  );
}
