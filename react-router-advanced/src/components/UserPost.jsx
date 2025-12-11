import { useParams } from "react-router-dom";

export default function UserPost() {
  const { postId } = useParams();
  return <div>Viewing post with ID: {postId}</div>;
}