import { FaChevronRight, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import ArticleThumbnail from "@/components/ArticleThumbnail/ArticleThumbnail";
import Button from "@/components/Button/Button";
import FollowButton from "@/components/Button/FollowButton";
import { Article } from "@/entities/Article";
import useArticles from "@/hooks/useArticles";

interface ArticleSidebarProps {
  article: Article;
}

export default function ArticleSidebar({ article }: ArticleSidebarProps) {
  const { getArticlesFromUser } = useArticles();
  const author = article?.user;
  const followed = +(article?.id || 0) % 2 === 0;
  const articles = getArticlesFromUser(author);
  //TODO: Sidebar fixed on scroll get to it

  return (
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
          <h3 className="text-center font-bold text-lg">{author?.name}</h3>
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
    </div>
  );
}
