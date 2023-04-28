import useFooterLinks from "@/hooks/useFooterLinks";
import Image from "next/image";
import OmungaPhoto from "../../assets/Omunga.png";

export default function Footer() {
  const { links, titles } = useFooterLinks();

  return (
    <footer className="h-[350px] bg-white flex justify-between px-12 py-[75px]">
      <div className="flex flex-col gap-2 max-w-xs">
        <Image src={OmungaPhoto} width={230} height={250} alt="Imagem Omunga" />
        <p className="text-black/70 mt-3">
          É um projeto criado com o principal objetivo de incentivar a partilha
          de conteúdo por parte dos profissionais de TI em Angola.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {titles.map((title) => (
          <div key={title}>
            <h1 className="text-lg font-bold">{title}</h1>
            <ul>
              {links[title].map((link) => (
                <li className="text-black/80 py-1" key={link.label}>
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
