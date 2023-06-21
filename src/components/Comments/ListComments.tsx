import { mockComments } from "@/mocks/CommentsMock";
import Comment from "./Comment";

export default function ListComments() {
  return (
    <div className="grid gap-2">
      {mockComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
