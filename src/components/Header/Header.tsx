import OmungaPhoto from "../../assets/Omunga.png";
import Image from "next/image";

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <header className="h-[80px] shadow-lg shadow-gray-300 flex items-center pl-16">
      <div>
        <Image src={OmungaPhoto} width={130} height={150} alt="Imagem Omunga" />
      </div>
      <div className="grow" />
      <div className="grow h-full">
        <div className="h-full flex justify-end items-center">
          <ul className="flex items-center">
            <li className="m-2">Página Inicial</li>
            <li className="m-2">Artigos</li>
            <li className="m-2">Sobre</li>
          </ul>
          <div className="ml-5 w-[35%] min-w-[140px] bg-purple h-full flex items-center justify-center">
            <button>Entrar</button>
          </div>
        </div>
      </div>
    </header>
  );
}
