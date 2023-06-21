import { Comment } from "@/entities/Comment";
import { mockArticles } from "./ArticlesMock";
import { usersMock } from "./UserMock";

export const mockComments: Comment[] = [
  {
    id: "1",
    answers: [],
    content: `lorem ipsum lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet...`,
    createdAt: new Date(2022, 8, 12),
    likes: 3,
    from: "article",
    originId: mockArticles[0].id,
    user: usersMock[1],
  },
  {
    id: "2",
    answers: [],
    content: `lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet...`,
    createdAt: new Date(2022, 8, 12),
    likes: 3,
    from: "article",
    originId: mockArticles[0].id,
    user: usersMock[3],
  },
  {
    id: "3",
    answers: [],
    content: `lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet...`,
    createdAt: new Date(2022, 8, 12),
    likes: 3,
    from: "article",
    originId: mockArticles[0].id,
    user: usersMock[2],
  },
];

mockComments[1].answers.push(mockComments[2], mockComments[0]);
