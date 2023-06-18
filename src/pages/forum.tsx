import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import ListQuestions from "@/components/CommonQuestions/ListQuestions";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ForumHeroHeader from "@/components/HeroHeader/ForumHeroHeader";

export default function ForumPage() {
  // TODO: create page to show question in details
  // Add comments for the question also.
  return (
    <>
      <Header />
      <ColoredSidebar isSimple={true} isShort={false} showIcon={true} />
      <main className="main">
        <ForumHeroHeader />
        <div className="lg:mt-[-80px]">
          <ListQuestions />
        </div>
      </main>
      <Footer />
    </>
  );
}
