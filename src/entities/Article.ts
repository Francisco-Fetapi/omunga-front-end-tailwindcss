import { User } from "./User";

export interface Article {
  /**
   * Title to describe the article.
   */
  title: string;
  /**
   * A markdown to describe what content is gonna be shown.
   */
  content: string;

  /**
   * The article owner.
   */
  user: User;

  /**
   * When the article was published.
   */
  createdAt: Date;
  /**
   * The last updating.
   */
  updatedAt: Date;
}
