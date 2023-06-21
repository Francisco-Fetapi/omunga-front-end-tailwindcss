import CommentSection from "@/components/Comments/CommentSection";

import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import useArticles from "@/hooks/useArticles";
import { mockArticles } from "@/mocks/ArticlesMock";

import { useRouter } from "next/router";

import ArticleSidebar from "@/components/Articles/ArticleSidebar";

export default function ArticlesPage() {
  const { query } = useRouter();
  const id = query.id as string;
  const currentArticle = mockArticles.find((article) => article.id === id);
  const author = currentArticle?.user;

  return (
    <>
      <Header />
      <ColoredSidebar isShort={true} showIcon={false} />
      <main className="main gap-lr mt-5">
        {!currentArticle && (
          <div>
            <h1 className="text-3xl text-center">Artigo não encontrado!</h1>
          </div>
        )}
        {currentArticle && (
          <div className="grid article-user-grid">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={author?.profilePhoto}
                  alt="Foto do autor"
                  width={50}
                  height={50}
                  className="img-bordered rounded-[50%]"
                />
                <div>
                  <p className="font-bold text-lg text-black/80">
                    {author?.name}
                  </p>
                  <p className="text-md text-gray-500">
                    {currentArticle.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <h1 className="font-bold text-black/80 text-3xl ">
                  {currentArticle.title}
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                  Alguma descrição breve sobre o artigo, ou mesmo um comentário
                  chamativo que incentive o leitor a continuar.
                </p>

                <div className="mt-12">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentArticle.posterImage}
                    alt="Poster do artigo"
                    width={500}
                    height={600}
                    className="rounded-lg"
                  />
                </div>

                <div className="mt-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis eu velit tempus erat egestas efficitur. In hac
                    habitasse platea dictumst. Fusce a nunc eget ligula suscipit
                    finibus. Aenean pharetra quis lacus at viverra.
                  </p>
                  <br />
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                    In eu dui molestie, molestie lectus eu, semper lectus.
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="font-bold text-black/90 text-xl mb-5">
                    Some Title
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis eu velit tempus erat egestas efficitur. In hac
                    habitasse platea dictumst. Fusce a nunc eget ligula suscipit
                    finibus. Aenean pharetra quis lacus at viverra.
                  </p>
                  <br />
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                    In eu dui molestie, molestie lectus eu, semper lectus.
                  </p>
                </div>

                <CommentSection article={currentArticle} />
              </div>
            </div>
            {/* <div className="relative h-full w-full min-w-[310px] gap-r">
              <ArticleSidebar article={currentArticle} />
            </div> */}
            <ArticleSidebar article={currentArticle} />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
