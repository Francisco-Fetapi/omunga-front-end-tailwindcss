/* eslint-disable @next/next/no-img-element */

import { usersMock } from "@/mocks/UserMock";
import { FaChevronRight } from "react-icons/fa";
import Button from "../Button/Button";

export default function SeeOurResources() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      <div className="basis-[400px] flex-1">
        <div className="card shadow-xl image-full">
          <figure>
            <img src="/bg.png" alt="Imagem de fundo Imunga" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary font-mono text-2xl">
              Omunga
            </h2>
            <p>Publique o seu primeiro artigo na Omunga agora mesmo!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-3xl">Publicar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[400px] flex-1">
        <h2 className="font-bold text-black text-2xl">
          Você pode criar uma conta e experimentar todos os recursos que temos
          para você.
        </h2>
        <p className="mt-4 text-gray-500 text-md">
          Crie uma conta ou faça login e experimente tudo de bom que temos para
          você.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <CardResource>
            <div className="flex items-center justify-center flex-col gap-2">
              <div className="avatar-group -space-x-6" style={{ zoom: 0.8 }}>
                {usersMock.slice(0, 4).map((user) => (
                  <div key={user.id} className="avatar">
                    <div className="w-12">
                      <img src={user.profilePhoto} alt="Foto do usuario" />
                    </div>
                  </div>
                ))}

                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xs">
                <b>+1k</b> usando o Omunga
              </p>
            </div>
          </CardResource>
          <CardResource>
            <div className="flex items-center justify-center flex-col gap-2">
              <img
                src="/papers.png"
                alt="Imagem iltustrativa"
                width={40}
                height={40}
              />
              <p className="text-gray-500 text-xs">
                <b>+1k</b> artigos postados
              </p>
            </div>
          </CardResource>
        </div>

        <div className="mt-6">
          <Button iconEnd={<FaChevronRight />}>Começar </Button>
        </div>
      </div>
    </div>
  );
}

function CardResource({ children }: React.PropsWithChildren) {
  return (
    <div className="h-[120px] bg-white rounded-xl shadow-xl flex items-center justify-center">
      {children}
    </div>
  );
}
