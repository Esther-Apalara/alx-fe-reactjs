import React from "react";
import PostsComponent from "./components/PostsComponent.jsx";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 12 }}>
      <h1>Task 1 — React Query</h1>
      <PostsComponent />
    </div>
  );
}