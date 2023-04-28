import Input from "@/components/Input/Input";
import Header from "../components/Header/Header";
import { FaUser, FaLock, FaChevronRight, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { GoogleIcon } from "@/assets/GoogleIcon";
import { FacebookIcon } from "@/assets/FacebookIcon";

export default function SignIn() {
  return (
    <>
      <Header />
      <main className="w-[100%] max-w-[400px] mx-auto  h-screen_height_with_header flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold mb-3">Entrar</h1>
        <p className="text-gray-400">
          Faça login na sua conta Omunga e desfrute já
        </p>
        <div className="mt-8 w-full">
          <Input placeholder="Insira o seu email" icon={<FaUser />} />
        </div>
        <div className="mt-5 w-full">
          <Input placeholder="Insira a sua senha" icon={<FaLock />} />
        </div>
        <div className="mt-5 w-full text-right">
          <Link href="/esqueci-minha-senha" className="text-black font-bold">
            Esqueceu sua senha?
          </Link>
        </div>
        <div className="mt-5 w-full">
          <Button fullWidth iconEnd={<FaChevronRight />}>
            Entrar
          </Button>
        </div>
        <div className="mt-5 w-full text-center">
          <p className="text-gray-400">Ou</p>
        </div>
        <div className="mt-5 w-full flex justify-center">
          <div className="w-1/3 grid grid-cols-3 gap-6">
            <GoogleIcon width={30} height={30} className="cursor-pointer" />
            <FacebookIcon
              width={30}
              height={30}
              className="text-blue-600 cursor-pointer"
            />
            <FaGithub size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-5 w-full text-center">
          <p className="">
            Não tem uma conta?{" "}
            <Link href="/criar-conta" className="text-purple">
              Registrar
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
