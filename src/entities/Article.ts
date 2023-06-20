import { User } from "./User";

export interface Article {
  id: string;
  /**
   * Title to describe the article.
   */
  title: string;
  /**
   * A markdown to describe what content is gonna be shown.
   */
  content: string;

  /**
   * An image to serve as a poster of article.
   */
  posterImage: string;

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
  updatedAt?: Date;
  /**
   * Number of likes from users.
   */
  likes: number;
  /**
   * Number of comments from users.
   */
  comments: number;
}
