import { Article } from "@/entities/Article";
import Image from "next/image";
import Button from "../Button/Button";
import FollowButton from "../Button/FollowButton";

interface ArticleItem {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItem) {
  const followed = +article.id % 2 === 0;
  return (
    <div className="h-[380px] bg-white shadow-2xl rounded-xl flex flex-col px-2 py-5">
      <div>
        <div className="flex items-center gap-3">
          <div>
            <Image
              src={article.user.profilePhoto}
              alt={`Foto do perfil do usuario ${article.user.name}`}
              width={35}
              height={35}
              style={{ borderRadius: "50%" }}
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
      </div>
      <div>
        <p>o</p>
      </div>
    </div>
  );
}
