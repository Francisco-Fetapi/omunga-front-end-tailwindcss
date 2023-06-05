import ArticleThumbnail from "@/components/ArticleThumbnail/ArticleThumbnail";
import Button from "@/components/Button/Button";
import FollowButton from "@/components/Button/FollowButton";
import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import useArticles from "@/hooks/useArticles";
import { mockArticles } from "@/mocks/ArticlesMock";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaChevronRight, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export default function ArticlesPage() {
  const { query } = useRouter();
  const id = query.id as string;
  const currentArticle = mockArticles.find((article) => article.id === id);
  const author = currentArticle?.user;
  const followed = +(currentArticle?.id || 0) % 2 === 0;

  const { getArticlesFromUser } = useArticles();
  const articles = getArticlesFromUser(author);

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
              </div>
            </div>
            <div className="hidden lg:block relative min-w-[310px]">
              <div className="bg-white rounded-3xl shadow-2xl h-[390px] flex flex-col items-center justify-center gap-5">
                <div className="rounded-[50%] border-purple border-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={author?.profilePhoto}
                    alt="Foto do autor"
                    width={100}
                    height={100}
                    className="img-bordered shadow-none rounded-[50%]"
                  />
                </div>
                <div>
                  <h3 className="text-center font-bold text-lg">
                    {author?.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Profissão/Curso/Nível acadêmico
                  </p>
                </div>
                <div className="w-1/3 grid grid-cols-3 gap-6">
                  <FaFacebook />
                  <FaGoogle />
                  <FaGithub />
                </div>
                <div>
                  <FollowButton followed={followed} />
                </div>
              </div>
              <div className="mt-8">
                <h2 className="font-bold text-lg">
                  Mais artigos de {author?.name.split(" ")[0]}
                </h2>
                <br />

                {articles.map((article) => (
                  <div className="grid gap-4" key={article.id}>
                    {/* Only for test purposes */}
                    {/* TODO: remove all fakes occurrences and show only one ArticleThumbnail. */}
                    <ArticleThumbnail article={article} />
                    <ArticleThumbnail article={article} />
                    <ArticleThumbnail article={article} />
                  </div>
                ))}
              </div>

              <br />
              <br />
              <div className="flex justify-center">
                <Link href={`/perfil/${author?.id}`}>
                  <Button variant="white" shadow iconEnd={<FaChevronRight />}>
                    <span className="font-bold">Ver Todos</span>
                  </Button>
                </Link>
              </div>
              {/* TODO: add comments section */}

              {/* TODO: add social media links in some pages, content fixed. */}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
