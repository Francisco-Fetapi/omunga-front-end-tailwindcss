import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ForumHeroHeader from "@/components/HeroHeader/ForumHeroHeader";

export default function ForumPage() {
  return (
    <>
      <Header />
      <ColoredSidebar isSimple={true} isShort={false} showIcon={true} />
      <main className="main">
        <ForumHeroHeader />
        <div className="lg:mt-[-80px]">{/* <h1>Ola Mundo!</h1> */}</div>
      </main>
      <Footer />
    </>
  );
}
