import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiArrowRight } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import '../App.css'

const RecipeListing = ({ recipes, onRefresh }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      onRefresh(); // Function to fetch the latest recipes
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [onRefresh]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
    <div className='bg'>
  <form className='border py-2 px-3 mb-3 w-50 w-sm-75 w-md-50 w-lg-50 rounded-pill m-auto shadow d-flex bg-white align-items-center'>
    <div className='fs-3 mx-2'>
      <FiSearch />
    </div>
    <input
      type="text"
      placeholder="Search by title or ingredient..."
      className="border-0 w-100 fs-5"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </form>

  <Link to={'/add'} className='text-decoration-none'>
    <button className='mx-auto mt-3 addbtn'>
      <p className="mb-0">Add</p>
      <TiArrowRight className='svg fs-4' />
    </button>
  </Link>
</div>

    <div className='banner'>
        
      <div className='col-12 col-md-6 col-lg-9 py-5 m-auto text-center'>
          <p className='text-muted text-uppercase fs-5'>Personalize Your Experience</p>
          <h2 style={{fontSize:"50px"}}>What are your favorite food?</h2>
      </div>      
    <div className="container mt-4">
    <div className="wrapper">
        <div className="box-area">
          {filteredRecipes.map(recipe => (
            <>
            <div>
            <div className="box" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <div className="overlay">
              <Link to={`/recipe/${recipe.id}`}>
                <p className='text-white'>{recipe.ingredients}</p>
                </Link> 
              </div>
              
            </div>
            <h3 className='py-3'>{recipe.title}</h3>
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default RecipeListing;
