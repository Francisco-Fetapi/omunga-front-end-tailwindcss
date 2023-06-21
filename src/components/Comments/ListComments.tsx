import { mockComments } from "@/mocks/CommentsMock";
import Comment from "./Comment";

export default function ListComments() {
  return (
    <div>
      {mockComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
