import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ALX expects this

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to home after deletion
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;