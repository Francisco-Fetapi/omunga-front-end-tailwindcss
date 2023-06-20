import {
  FaUser,
  FaLock,
  FaChevronRight,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { GoogleIcon } from "@/assets/GoogleIcon";
import { FacebookIcon } from "@/assets/FacebookIcon";
import Input from "@/components/Input/Input";

export default function FormSignUp() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Registrar-se</h1>
      <p className="text-gray-400">Crie a sua conta Omunga e desfrute já</p>
      <div className="flex gap-2 mt-8">
        <div>
          <Input placeholder="Nome" icon={<FaUser />} />
        </div>
        <div>
          <Input placeholder="Sobrenome" icon={<FaUser />} />
        </div>
      </div>
      <div className="mt-5 w-full">
        <Input placeholder="Email" icon={<FaEnvelope />} />
      </div>
      <div className="mt-5 w-full">
        <Input placeholder="Senha" icon={<FaLock />} />
      </div>
      <div className="mt-5 w-full">
        <Input placeholder="Confirmar senha" icon={<FaLock />} />
      </div>
      <div className="mt-5 w-full text-right">
        <Link href="/esqueci-minha-senha" className="text-black font-bold">
          Esqueceu sua senha?
        </Link>
      </div>
      <div className="mt-5 w-full">
        <Button fullWidth iconEnd={<FaChevronRight />}>
          Registrar
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
          Já tem uma conta?{" "}
          <Link href="/iniciar-sessao" className="text-purple">
            Iniciar Sessão
          </Link>
        </p>
      </div>
    </>
  );
}
