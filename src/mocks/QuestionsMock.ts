import { Question } from "@/entities/Question";
import { usersMock } from "./UserMock";

export const mockQuestions: Question[] = [
  {
    id: "1",
    title: "Será que devo trocar JavaScript por .NET?",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tempore
      odio dolores eum iste beatae quos voluptatem quam molestias iure maxime
      consequuntur eaque, nostrum non illum, facere adipisci, placeat et.
      Quibusdam delectus eius facere eaque, pariatur nobis nisi, facilis
      incidunt recusandae odio modi, quaerat aliquam iste molestias officiis`,
    createdAt: new Date(2021, 4, 27),
    user: usersMock[0],
    questioner: usersMock[1],
  },
  {
    id: "2",
    title: "Faz sentido apender Clean Architecture logo no começo?",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tempore
      odio dolores eum iste beatae quos voluptatem quam molestias iure maxime
      consequuntur eaque, nostrum non illum, facere adipisci, placeat et.
      Quibusdam delectus eius facere eaque, pariatur nobis nisi, facilis
      incidunt recusandae odio modi, quaerat aliquam iste molestias officiis`,
    createdAt: new Date(2021, 4, 27),
    user: usersMock[2],
    questioner: usersMock[3],
  },
  {
    id: "3",
    title: "Qual devo escolher React.js/Vue.js/Angular.js ?",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tempore
      odio dolores eum iste beatae quos voluptatem quam molestias iure maxime
      consequuntur eaque, nostrum non illum, facere adipisci, placeat et.
      Quibusdam delectus eius facere eaque, pariatur nobis nisi, facilis
      incidunt recusandae odio modi, quaerat aliquam iste molestias officiis`,
    createdAt: new Date(2021, 4, 27),
    user: usersMock[3],
    questioner: usersMock[2],
  },
];
