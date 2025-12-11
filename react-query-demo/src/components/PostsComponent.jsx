import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response not ok");
  return res.json();
};

export default function PostsComponent() {
  // ✅ Include caching options and both isError & error
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute
    cacheTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading posts...</div>;

  if (isError)
    return (
      <div>
        Error fetching posts: {error.message}
      </div>
    );

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Posts (React Query)</h2>
      {/* ✅ Refetch button */}
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