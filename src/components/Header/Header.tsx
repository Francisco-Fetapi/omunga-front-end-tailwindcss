import OmungaPhoto from "../../assets/Omunga.png";
import Image from "next/image";

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <header className="h-[100px] shadow-lg shadow-gray-300 flex items-center justify-between">
      <div>
        <Image src={OmungaPhoto} width={70} height={90} alt="Imagem Omunga" />
      </div>
      <div className="flex justify-between items-center">
        <ul className="flex items-center">
          <li className="m-2">Página Inicial</li>
          <li className="m-2">Artigos</li>
          <li className="m-2">Sobre</li>
        </ul>
        <div>
          <button className="bg-purple text-white2">Entrar</button>
        </div>
      </div>
    </header>
  );
}
