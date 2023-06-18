import { User } from "./User";

export interface Question {
  id: string;
  /**
   * Title to describe the question. The question in fact.
   */
  title: string;
  /**
   * A markdown to describe some answer for the question.
   */
  content: string;

  /**
   * Who ask the question.
   */
  questioner: User;

  /**
   * The user who answered the question.
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
}
