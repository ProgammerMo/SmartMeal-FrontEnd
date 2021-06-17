import React from 'react';
import Meal from './Meal/Meal';
import './MealList.css';

const MealList = ({ meals }) => {
    const mealComponent = meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />
    })

    return (
        <div className='mealListContainer'>
            {mealComponent}
        </div>
    );
}

export default MealList;