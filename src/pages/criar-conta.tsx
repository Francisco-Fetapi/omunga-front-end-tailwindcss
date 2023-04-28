import Footer from "@/components/Footer/Footer";
import FormSignUp from "@/components/forms/FormSignUp/FormSignUp";
import Header from "../components/Header/Header";

export default function SignUp() {
  return (
    <>
      <Header />
      <main className="w-[100%] max-w-[400px] min-height py-12 mx-auto flex items-center justify-center flex-col">
        <FormSignUp />
      </main>

      <Footer />
    </>
  );
}
