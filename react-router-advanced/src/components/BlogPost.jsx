import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return <div>Viewing blog post with ID: {id}</div>;
}