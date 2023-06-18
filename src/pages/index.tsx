import Articles from "@/components/Articles";
import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeHeroHeader from "@/components/HeroHeader/HomeHeroHeader";

export default function Home() {
  return (
    <>
      <Header />
      <ColoredSidebar isShort={false} showIcon={true} />
      <main className="main">
        <HomeHeroHeader />
        <Articles />
      </main>

      <Footer />
    </>
  );
}
