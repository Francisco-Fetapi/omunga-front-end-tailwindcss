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
    user: usersMock[1],
    questioner: usersMock[0],
  },
];
