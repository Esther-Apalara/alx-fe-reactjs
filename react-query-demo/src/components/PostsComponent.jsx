import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response not ok");
  return res.json();
};

export default function PostsComponent() {
  // ✅ Include both isError and error
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute caching
  });

  if (isLoading) return <div>Loading posts...</div>;

  if (isError)
    return (
      <div>
        Error fetching posts: {error.message} {/* ✅ use `error` here */}
      </div>
    );

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Posts (React Query)</h2>

      {/* ✅ Refetch button */}
      <button onClick={() => refetch()}>Refetch Posts</button>

      <ul>
        {/* Show first 10 posts */}
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