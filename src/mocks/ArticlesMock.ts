import { Article } from "@/entities/Article";
import { usersMock } from "./UserMock";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Desenvolvimento orientado à testes descomplicado",
    content: "",
    createdAt: new Date(2021, 4, 27),
    user: usersMock[0],
    posterImage: "./",
  },
  {
    id: "2",
    title: "Criando componentes e hooks personalizados no React.",
    content: "",
    createdAt: new Date(2019, 3, 13),
    user: usersMock[1],
    posterImage: "./",
  },
  {
    id: "3",
    title: "Entenda porque internet grátis funciona com Africell.",
    content: "",
    createdAt: new Date(2023, 1, 20),
    user: usersMock[2],
    posterImage: "./",
  },
  {
    id: "4",
    title:
      "8 coisas que você precisa saber do Java antes de partir para o Kotlin",
    content: "",
    createdAt: new Date(2022, 8, 9),
    user: usersMock[3],
    posterImage: "./",
  },
  {
    id: "5",
    title:
      "Entenda os procedimentos necessário para configurar um ambiente DevOps",
    content: "",
    createdAt: new Date(2023, 4, 28),
    user: usersMock[4],
    posterImage: "./",
  },
  {
    id: "6",
    title: "Plano de Carreira e vagas em Big Techs.",
    content: "",
    createdAt: new Date(2020, 4, 15),
    user: usersMock[5],
    posterImage: "./",
  },
];
