import { Article } from "@/entities/Article";
import { usersMock } from "./UserMock";

export const mockArticles: Article[] = [
  {
    title: "Desenvolvimento orientado à testes descomplicado",
    content: "",
    createdAt: new Date(),
    user: usersMock[0],
  },
];
