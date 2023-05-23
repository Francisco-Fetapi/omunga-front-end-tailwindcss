import { Article } from "@/entities/Article";
import Image from "next/image";
import FollowButton from "../Button/FollowButton";
import { MdOutlineThumbUp, MdOutlineComment } from "react-icons/md";

interface ArticleItem {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItem) {
  const followed = +article.id % 2 === 0;

  return (
    <div className="h-[400px] bg-white shadow-2xl rounded-xl flex flex-col px-3 py-5 select-none">
      <div>
        <div className="flex items-center gap-3">
          <div>
            <Image
              src={article.user.profilePhoto}
              alt={`Foto do perfil do usuario ${article.user.name}`}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
              className="img-bordered "
            />
          </div>
          <div className="grow">
            <p className="text-sm text-gray-500">{article.user.name}</p>
            <p className="text-xs text-gray-500">
              {article.createdAt.toLocaleDateString()}
            </p>
          </div>
          <div>
            <FollowButton followed={followed} />
          </div>
        </div>
      </div>
      <div className="grow mt-3">
        <h2 className="font-bold text-black/80 text-md">{article.title}</h2>
        <br />
        <Image
          width={380}
          height={380}
          src={article.posterImage}
          alt={article.title}
          style={{
            borderRadius: 10,
          }}
        />
      </div>
      <div>
        <div className="ml-1 mt-2 flex items-center gap-4">
          <MdOutlineThumbUp size={24} className="icon-button" />
          <MdOutlineComment size={24} className="icon-button" />
        </div>
      </div>
    </div>
  );
}
