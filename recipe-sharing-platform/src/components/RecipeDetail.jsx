// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((item) => item.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-6">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;