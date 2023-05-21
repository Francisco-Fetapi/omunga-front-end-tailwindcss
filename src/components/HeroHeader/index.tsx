import { ButtonProps } from "../Button/Button";
import InputWithButton from "../InputWithButton/InputWithButton";

interface HeroHeaderProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export default function HeroHeader({ content, title }: HeroHeaderProps) {
  return (
    <div className="min-height gap-l flex flex-col justify-center w-[100%] max-w-[570px]">
      <h1 className="text-6xl">{title}</h1>
      <br />
      <p className="text-gray-500 text-lg">{content}</p>
      <br />
      <div className="w-[95%]">
        <InputWithButton
          textButton="Pesquisar"
          placeholder="pesquise por um assunto"
        />
      </div>
    </div>
  );
}
