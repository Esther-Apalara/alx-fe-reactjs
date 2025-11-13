// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  
  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));