import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { LoremIpsum } from ".";

export default function AboutUs() {
  return (
    <>
      <Header />
      <ColoredSidebar isShort={false} showIcon={true} />
      <main className="w-[100%] min-height py-12 mx-auto flex items-center justify-center flex-col">
        <h1>Sobre</h1>
      </main>

      <Footer />
    </>
  );
}
