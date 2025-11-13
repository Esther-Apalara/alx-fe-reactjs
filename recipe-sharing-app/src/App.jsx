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

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
                <button onClick={generateRecommendations}>
                  Generate Recommendations
                </button>
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}