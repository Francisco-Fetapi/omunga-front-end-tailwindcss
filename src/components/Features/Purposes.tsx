const purposes = [
  "Partilhar conhecimento e aprender uns com os outros.",
  "Desenvolvido especialmente para os angolanos.",
  "Cultivar a cultura de partilhas de conteudo.",
];

export default function Purposes() {
  return (
    <div className="py-12 flex flex-col justify-center items-center px-4 bg-primary min-h-[200px]">
      <div className="flex flex-col items-center">
        <h2 className="text-black/70  font-bold text-2xl mb-2 ">
          O Que tem de bom na Omunga?
        </h2>
        <p className="text-white2/90 text-md ">
          Existem três coisas épicas que você pode encontrar aqui
        </p>
      </div>
      <div className="mt-8 flex flex-wrap  items-center gap-4">
        {purposes.map((purpose, key) => (
          <Purpose position={key + 1} key={key}>
            {purpose}
          </Purpose>
        ))}
      </div>
    </div>
  );
}

interface PurposeProps {
  position: number;
}

function Purpose({
  children,
  position,
}: React.PropsWithChildren<PurposeProps>) {
  return (
    <div className="basis-[300px] mt-4 flex-1 flex flex-col items-center gap-4">
      <div className="font-mono text-black/70 text-7xl">{"0" + position}</div>
      <div className="text-white/90 font-italic text-md w-[300px] text-center">
        {children}
      </div>
    </div>
  );
}
