import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ArticlesHeroHeader from "@/components/HeroHeader/ArticlesHeroHeader";
import Articles from "@/components/Articles";

export default function ArticlesPage() {
  // TODO: header height is less than in other pages, do not cover all height-viewport.
  // TODO: show the photo profile of  logged user currently.
  // TODO: show "Postar" button on header instead "Entrar". "Entrar" only must appear if the current user isn't logged

  return (
    <>
      <Header />
      <ColoredSidebar isSimple={true} isShort={false} showIcon={true} />
      <main className="main">
        <ArticlesHeroHeader />
        <Articles showHeader={false} />
      </main>

      <Footer />
    </>
  );
}
