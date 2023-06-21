import { Article } from "@/entities/Article";
import { FaComments, FaThumbsUp } from "react-icons/fa";
import Button from "../Button/Button";
import ListComments from "./ListComments";

interface CommentSectionProps {
  article: Article;
}

export default function CommentSection({ article }: CommentSectionProps) {
  // TODO: list comments. Create Comment Component. daisyUi Docs.
  // TODO: add num. likes and comments on article mock

  return (
    <div className="mt-8">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider font-bold text-lg">Seção de Comentários</div>

        <div>
          <div className="flex gap-1 justify-end mb-3">
            <div className="flex items-center gap-2">
              <div>
                <FaThumbsUp />
              </div>
              <span className="mt-[4px] font-bold text-md">
                {article.likes}
              </span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex items-center gap-2">
              <div>
                <FaComments />
              </div>
              <span className="font-bold text-md">{article.comments}</span>
            </div>
          </div>

          <div className="my-12">
            <ListComments />
          </div>

          <div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered h-48"
                placeholder="Escreva um comentário"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <Button>Comentar &nbsp;&nbsp;</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
