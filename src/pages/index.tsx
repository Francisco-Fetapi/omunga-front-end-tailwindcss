import Articles from "@/components/Articles";
import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Purposes from "@/components/Features/Purposes";
import SeeOurResources from "@/components/Features/SeeOurResources";
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
        <Purposes />
        <div className="gap-lr my-8">
          <SeeOurResources />
        </div>
      </main>

      <Footer />
    </>
  );
}
