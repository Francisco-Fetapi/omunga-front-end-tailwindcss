import { User } from "./User";

type Answer = Omit<Comment, "answers">;

export interface Comment {
  id: string;
  /**
   * Origin can be an Article or a Comment in cases when the comment is an answer to another comment.
   */

  originId: string;
  /**
   * A markdown to describe what content is gonna be shown.
   */

  content: string;
  /**
   * Define if the comment is from an article or comment.
   */
  from: "article" | "comment";
  /**
   * The article owner.
   */
  user: User;
  /**
   * When the comment was published.
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
   * Answers from the current comment. An Answer is basically a comment with no answers available.
   */
  answers: Answer[];
}
