import useHeaderLinks from "@/hooks/useHeaderLinks";
// import useHeaderLinks from "../../hooks/useHeaderLinks";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa";
import OmungaLogo from "../OmungaLogo";
import useAuth from "@/hooks/useAuth";

export const sizeOfSideBarBackground = "min-w-[140px]";

export default function Header() {
  const links = useHeaderLinks();
  const { pathname } = useRouter();
  const { logged } = useAuth();
  const isOnLoginPage = pathname === "/iniciar-sessao";
  // TODO: Router Transition implement. use some lib
  return (
    <>
      <header className="h-header z-50 bg-white shadow-lg shadow-gray-300 flex items-center pl-16">
        <div>
          <OmungaLogo size="medium" />
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
                  className={`mx-5 h-full text-sm flex items-center ${
                    pathname === link.href ? "link_active" : ""
                  }`}
                >
                  <li>{link.label}</li>
                </Link>
              ))}
            </ul>
            <div
              className={`ml-12 ${sizeOfSideBarBackground} w-[45%] h-full flex items-center justify-center relative z-10 bg-purple lg:bg-transparent`}
            >
              {!logged && (
                <Link href={isOnLoginPage ? "/criar-conta" : "/iniciar-sessao"}>
                  <Button iconEnd={<FaChevronRight />}>
                    {isOnLoginPage ? "Registrar-se" : "Entrar"}
                  </Button>
                </Link>
              )}
              {logged && <Button iconEnd={<FaChevronRight />}>Postar</Button>}
            </div>
          </div>
        </div>
      </header>
      <div className="h-header" />
    </>
  );
}
