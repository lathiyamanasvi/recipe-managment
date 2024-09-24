import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeForm = ({ onSubmit, recipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = id !== undefined;

  // Initial recipe values including the new fields
  const initialRecipe = isEdit
    ? recipes.find(r => r.id === parseInt(id))
    : { title: '', ingredients: [], instructions: '', cookingTime: '', image: '', calories: '', ingredientsNo: '', restaurantName: '' };

  // State variables
  const [title, setTitle] = useState(initialRecipe.title);
  const [ingredients, setIngredients] = useState(initialRecipe.ingredients.join(', '));
  const [instructions, setInstructions] = useState(initialRecipe.instructions);
  const [cookingTime, setCookingTime] = useState(initialRecipe.cookingTime);
  const [image, setImage] = useState(initialRecipe.image);
  const [calories, setCalories] = useState(initialRecipe.calories);
  const [ingredientsNo, setIngredientsNo] = useState(initialRecipe.ingredientsNo);
  const [restaurantName, setRestaurantName] = useState(initialRecipe.restaurantName);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientArray = ingredients.split(',').map(ingredient => ingredient.trim());
    onSubmit({
      id: isEdit ? parseInt(id) : Date.now(),
      title,
      ingredients: ingredientArray,
      instructions,
      cookingTime,
      image,
      calories,
      ingredientsNo,
      restaurantName
    });
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>{isEdit ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Ingredients (comma-separated)</label>
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Instructions</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} className="form-control" required></textarea>
        </div>
        <div className="form-group">
          <label>Cooking Time (minutes)</label>
          <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} className="form-control" required />
        </div>
        {/* New field: Calories */}
        <div className="form-group">
          <label>Calories</label>
          <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} className="form-control" required />
        </div>
        {/* New field: Number of Ingredients */}
        <div className="form-group">
          <label>Number of Ingredients</label>
          <input type="number" value={ingredientsNo} onChange={(e) => setIngredientsNo(e.target.value)} className="form-control" required />
        </div>
        {/* New field: Restaurant Name */}
        <div className="form-group">
          <label>Restaurant Name</label>
          <input type="text" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEdit ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
