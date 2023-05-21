import HeroHeader from ".";

export default function HomeHeroHeader() {
  return (
    <HeroHeader
      title={
        <>
          O <span className="text-purple">saber</span> não
          <br /> ocupa espaço
        </>
      }
      content={`O melhor lugar para buscar e publicar seus artigos e blogs relacionados
        a TI. Aqui acreditamos no poder da partilha de conteudo.`}
    />
  );
}
