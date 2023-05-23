import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <ColoredSidebar isShort={true} showIcon={false} />
      <main className="main">
        <h1 className="text-3xl">Ola Mundo</h1>
      </main>

      <Footer />
    </>
  );
}
