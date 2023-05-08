import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import FormSignin from "@/components/forms/FormSignin/FormSignin";
import Header from "../components/Header/Header";

export default function SignIn() {
  return (
    <>
      <Header />
      <ColoredSidebar />
      <main className="w-[100%] max-w-[400px] min-height py-12 mx-auto flex items-center justify-center flex-col">
        <FormSignin />
      </main>

      <Footer />
    </>
  );
}
