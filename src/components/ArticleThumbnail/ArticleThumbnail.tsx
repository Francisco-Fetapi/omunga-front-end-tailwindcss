/* eslint-disable @next/next/no-img-element */
import { Article } from "@/entities/Article";
import getShortText from "@/helpers/getShortText";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface ArticleThumbnailProps {
  article: Article;
}

export default function ArticleThumbnail({ article }: ArticleThumbnailProps) {
  return (
    <Link href={`/artigos/${article.id}`}>
      <div className="bg-white rounded-3xl shadow-md flex items-center py-2 px-2 gap-2">
        <img
          src={article.posterImage}
          alt={article.title}
          className="rounded-xl w-[90px] object-cover"
        />

        <div className="grow">
          <h3 className="text-xs font-bold">
            {getShortText(article.title, 5)}
          </h3>

          <p className="text-gray-500 text-xs mt-2">
            {article.createdAt.toLocaleDateString()}
          </p>
        </div>

        <div className="basis-[30px] flex items-center">
          <FaChevronRight />
        </div>
      </div>
    </Link>
  );
}
