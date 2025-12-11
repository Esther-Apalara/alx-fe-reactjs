import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent.jsx";

// ✅ Create QueryClient here
const queryClient = new QueryClient();

export default function App() {
  return (
    // ✅ Wrap everything in QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: "system-ui, sans-serif", padding: 12 }}>
        <h1>Task 1 — React Query</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}
