import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './component/RecipeList';
import RecipeDetail from './component/RecipeDetail';
import RecipeForm from './component/RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  };

  const handleAddOrUpdateRecipe = (recipe) => {
    setRecipes(prev => {
      const existingIndex = prev.findIndex(r => r.id === recipe.id);
      const updatedRecipes = existingIndex !== -1
        ? prev.map((r, index) => (index === existingIndex ? recipe : r))
        : [...prev, recipe];
      
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return updatedRecipes;
    });
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(prev => {
      const updatedRecipes = prev.filter(recipe => recipe.id !== id);
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return updatedRecipes;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} onRefresh={fetchRecipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} onDelete={handleDeleteRecipe} />} />
        <Route path="/add" element={<RecipeForm onSubmit={handleAddOrUpdateRecipe} />} />
        <Route path="/edit/:id" element={<RecipeForm onSubmit={handleAddOrUpdateRecipe} recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
