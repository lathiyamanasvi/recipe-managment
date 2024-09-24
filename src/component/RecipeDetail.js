import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css'

const RecipeDetail = ({ recipes, onDelete }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="container mt-4">
      {/* <h2></h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <Link to={`/edit/${recipe.id}`} className="btn btn-warning mr-2">Edit</Link>
      <button onClick={() => onDelete(recipe.id)} className="btn btn-danger">Delete</button>
      <div className='d-flex'>
        <div className='w-50'>
          <h2 style={{fontSize:"60px"}}>{recipe.title}</h2>
        </div>
        <div className='w-50'>
        <img src={recipe.image} alt={recipe.title} className="img-fluid" />
        </div>
      </div> */}
      <div class="row">
    
    <div class="col-md-6 p-5">
      
      <h1 class="font-weight-bold heading pb-2">{recipe.title}</h1>
      <p class="text-muted fs-5">{recipe.restaurantName}</p>

    
      <div class="d-flex align-items-center mb-3">
        <span class="text-warning fs-3">★★★★★</span>
        <span class="ml-2 text-muted">(12)</span>
      </div>

      <p className='fs-6'> {recipe.instructions}
      </p>

    
      <div class="d-flex justify-content-between mt-4">
        <div class="text-center">
          <h3>{recipe.ingredientsNo}</h3>
          <p className='par'>Ingredients</p>
        </div>
        <div class="text-center">
          <h3>{recipe.cookingTime}</h3>
          <p className='par'>Hours</p>
        </div>
        <div class="text-center">
          <h3>{recipe.calories}</h3>
          <p class="par">Calories</p>
        </div>
      </div>

     
      <div class="mt-4">
        <button class="btn btn-warning w-100 text-white button">Add to Meal Planner</button>
      </div>
      <div className='d-flex justify-content-around pt-2'>
        <div className='w-50'>
        <button type="button" class="btn btn-danger" style={{width:"90%"}}  onClick={() => onDelete(recipe.id)}>Delete</button>
        </div>
        <div className='w-50'>
          <Link to={`/edit/${recipe.id}`}>
            <button type="button" class="btn btn-primary" style={{width:"100%"}}>Edit</button></Link>
        </div>
      </div>
    </div>

    <div class="col-md-6 text-center rounded-3">
      <img src={recipe.image} alt="Pizza Image" class="img-fluid rounded shadow-sm imggg"/>
    </div>
  </div>
  
    </div>
  );
};

export default RecipeDetail;
