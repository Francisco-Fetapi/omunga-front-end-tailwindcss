import { User } from "@/entities/User";

export const usersMock: Omit<User, "id">[] = [
  { name: "Franciso Fetapi", profilePhoto: "./francisco.jpg" },
  { name: "Eduardo Flávio", profilePhoto: "./eduardoflavio.jpg" },
  { name: "Felipe Manuel", profilePhoto: "./felipe.jpg" },
  { name: "Carlos Bumba", profilePhoto: "./carlos.jpg" },
  { name: "Paulo Manuel", profilePhoto: "./paulo.jpg" },
  { name: "Lázaro Campos", profilePhoto: "./lazaro.jpg" },
  { name: "Antónia Carlos", profilePhoto: "./antonia.jpg" },
];
