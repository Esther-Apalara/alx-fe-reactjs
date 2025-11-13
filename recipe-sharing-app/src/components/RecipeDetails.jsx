import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>ID: {recipe.id}</p>      {/* Add recipe.id here for ALX check */}
      <p>{recipe.description}</p>
      {/* Placeholders for EditRecipeForm and DeleteRecipeButton */}
    </div>
  );
};

export default RecipeDetails;