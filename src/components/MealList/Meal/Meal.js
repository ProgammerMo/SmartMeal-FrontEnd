import React, { useEffect, useState } from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(
      `https://smart-meal-v1.herokuapp.com/meal/${ meal.id }`
    )
    .then(response => response.json())
    .then(data => {
      setImageUrl(data.image)
    })
    .catch(() => {
      console.log("error");
    });
  }, [meal.id])

  return (
    <div className='mealContainer shadow'>
        <p className='text '>{ meal.title }</p>
        <img className='img shadow'src={ imageUrl } alt="Meal" />
        <p className='text fontSmaller'>Ready in { meal.readyInMinutes } minutes</p>
        <p className='text fontSmaller'>Servings: { meal.servings }</p>
        <a className='link linkButton shadow ' href={ meal.sourceUrl } >Recipe</a>
    </div>
  );
}
  
export default Meal;