import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>

        {/* Keep all original Task 1 components exactly as they were */}
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>

        {/* Task 3 additions, outside of routing */}
        <FavoritesList />
        <RecommendationsList />
        <button onClick={generateRecommendations}>
          Generate Recommendations
        </button>
      </div>
    </Router>
  );
}

export default App;