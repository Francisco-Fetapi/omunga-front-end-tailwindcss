import OmungaPhoto from "../../assets/Omunga.png";
import Image from "next/image";
import useHeaderLinks from "@/hooks/useHeaderLinks";
// import useHeaderLinks from "../../hooks/useHeaderLinks";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa";

export default function Header({ children }: React.PropsWithChildren) {
  const links = useHeaderLinks();
  const { pathname } = useRouter();

  return (
    <header className="h-header bg-white shadow-lg shadow-gray-300 flex items-center pl-16">
      <div>
        <Image src={OmungaPhoto} width={130} height={150} alt="Imagem Omunga" />
      </div>
      <div className="grow" />
      <div className="grow h-full">
        <div className="h-full flex justify-end items-center">
          <ul className="flex items-center h-full">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                passHref
                className={`mx-3 h-full text-lg flex items-center ${
                  pathname === link.href ? "link_active" : ""
                }`}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
          <div className="ml-5 w-[35%] min-w-[140px] bg-purple h-full flex items-center justify-center">
            <Link href="iniciar-sessao">
              <Button iconEnd={<FaChevronRight />}>Entrar</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
