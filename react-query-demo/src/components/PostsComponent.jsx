import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Posts (React Query)</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}