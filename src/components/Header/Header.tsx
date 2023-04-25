import OmungaPhoto from "../../assets/Omunga.png";
import Image from "next/image";
import "../../styles/globals.css";

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <header className="h-[100px] shadow-lg shadow-gray-300 flex items-center justify-between">
      <div>
        <Image src={OmungaPhoto} width={70} height={40} alt="Imagem Omunga" />
      </div>
      <div className="flex justify-between items-center">
        <ul className="flex items-center">
          <li className="m-2 text-black/90">Página Inicial</li>
          <li className="m-2 text-black/90">Artigos</li>
          <li className="m-2 text-black/90">Sobre</li>
        </ul>
        <div>
          <button className="bg-purple text-white2">Entrar</button>
        </div>
      </div>
    </header>
  );
}
