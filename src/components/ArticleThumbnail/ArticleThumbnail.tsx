/* eslint-disable @next/next/no-img-element */
import { Article } from "@/entities/Article";
import getShortText from "@/helpers/getShortText";
import { FaArrowRight } from "react-icons/fa";

interface ArticleThumbnailProps {
  article: Article;
}

export default function ArticleThumbnail({ article }: ArticleThumbnailProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex items-center py-2 px-2 gap-2">
      <div className="basis-[150px]">
        <img
          src={article.posterImage}
          alt={article.title}
          width={110}
          height={150}
          className="rounded-lg"
        />
      </div>

      <div className="grow">
        <h3 className="text-xs font-bold">{getShortText(article.title, 5)}</h3>

        <p className="text-gray-500 text-xs mt-2">
          {article.createdAt.toLocaleDateString()}
        </p>
      </div>

      <div className="basis-[30px] flex items-center">
        <FaArrowRight />
      </div>
    </div>
  );
}
