import HeroHeader from ".";

export default function ArticlesHeroHeader() {
  return (
    <div className="h-simple-header">
      <HeroHeader
        title="Artigos"
        content={`Encontre os seus blogs favoritos aqui. Poderá explorar a nossa listagem abaixo ou pode fazer uma pesquisa se quiser.`}
      />
    </div>
  );
}
