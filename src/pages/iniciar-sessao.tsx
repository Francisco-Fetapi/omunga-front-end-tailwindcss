import FormSignin from "@/components/forms/FormSignin/FormSignin";
import Header from "../components/Header/Header";

export default function SignIn() {
  return (
    <>
      <Header />
      <main className="w-[100%] max-w-[400px] mx-auto  h-screen_height_with_header flex items-center justify-center flex-col">
        <FormSignin />
      </main>
    </>
  );
}
