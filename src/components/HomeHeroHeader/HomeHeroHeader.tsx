import InputWithButton from "../InputWithButton/InputWithButton";

export default function HomeHeroHeader() {
  return (
    <div className="min-height pl-[100px] flex flex-col justify-center w-[100%] max-w-[570px]">
      <h1 className="text-6xl">
        O <span className="text-purple">saber</span> não
        <br /> ocupa espaço
      </h1>
      <br />
      <p className="text-gray-500 text-lg">
        O melhor lugar para buscar e publicar seus artigos e blogs relacionados
        a TI. Aqui acreditamos no poder da partilha de conteudo.
      </p>
      <br />
      <div className="w-[95%]">
        <InputWithButton
          textButton="Pesquisar"
          placeholder="pesquise por um assunto"
        />
      </div>
    </div>
  );
}
