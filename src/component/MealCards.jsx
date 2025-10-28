import React from 'react'
import { NavLink } from 'react-router-dom';

const MealCards = ({details}) => {
    console.log(details);
    
  return (
    <div className='meals'>
      {!details ? "" : details.map((curItem) => {
        return (
            <div className='mealImg' key={curItem.idMeal} >
                <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}><button >Recipe</button></NavLink>
            </div>
        )
      })
    }
    </div> 
  )
}

export default MealCards;
