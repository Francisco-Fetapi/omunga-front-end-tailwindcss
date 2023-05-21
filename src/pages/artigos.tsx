import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { LoremIpsum } from ".";

export default function Articles() {
  return (
    <>
      <Header />
      <ColoredSidebar isShort={false} showIcon={true} />
      <main className="main flex items-center justify-center">
        <h1>Artigos!</h1>
        <LoremIpsum />
      </main>

      <Footer />
    </>
  );
}
