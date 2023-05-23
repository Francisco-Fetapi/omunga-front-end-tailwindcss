import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ArticlesHeroHeader from "@/components/HeroHeader/ArticlesHeroHeader";
import Articles from "@/components/Articles";

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <ColoredSidebar isSimple={true} isShort={false} showIcon={true} />
      <main className="main">
        <ArticlesHeroHeader />
        <div className="lg:mt-[-80px]">
          <Articles showHeader={false} />
        </div>
      </main>

      <Footer />
    </>
  );
}
