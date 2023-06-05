import { User } from "@/entities/User";
import { mockArticles } from "@/mocks/ArticlesMock";

export default function useArticles() {
  return {
    getArticlesFromUser(user?: User) {
      return mockArticles.filter((article) => article.user.id === user?.id);
    },
  };
}
