// src/App.jsx
import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          GitHub User Search
        </h1>
      </header>

      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;