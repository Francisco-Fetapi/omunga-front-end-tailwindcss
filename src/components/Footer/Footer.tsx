import useFooterLinks from "@/hooks/useFooterLinks";
import Image from "next/image";
import Link from "next/link";
import OmungaPhoto from "../../assets/Omunga.png";
import InputWithButton from "../InputWithButton/InputWithButton";

export default function Footer() {
  const { links, titles } = useFooterLinks();

  return (
    <footer className="h-[350px] bg-white px-12 py-[75px]">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-2 max-w-xs">
          <Image
            src={OmungaPhoto}
            width={190}
            height={210}
            alt="Imagem Omunga"
          />
          <p className="text-black/70 mt-3">
            É um projeto criado com o principal objetivo de incentivar a
            partilha de conteúdo por parte dos profissionais de TI em Angola.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {titles.map((title) => (
            <div key={title}>
              <h1 className="text-lg font-bold mb-2">{title}</h1>
              <ul className="flex flex-col gap-1 items-start">
                {links[title].map((link) => (
                  <Link
                    href={link.href}
                    className="text-black/80 hover:text-purple "
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-end"> */}
      <div className="flex justify-end mt-5">
        <InputWithButton
          textButton="Pesquisar"
          placeholder="Pesquise por um assunto"
        />
      </div>
    </footer>
  );
}
