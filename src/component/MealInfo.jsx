import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const MealInfo = () => {

    const {mealId} = useParams()
    const [info,setInfo] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const getInfo = async () => {
          try{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const jsonData = await get.json();
            console.log(jsonData.meals[0]);
            setInfo(jsonData.meals[0])
          }catch(error){
            console.error("error fetching meal info",error);
            setInfo(null) 
          }
            
        }
        getInfo();
    },[mealId])

  return (

    <div>
        {
          !info ? "Data Not Found" : 

         <div className='mealInfo'>
                <img src={info.strMealThumb} />
            <div className='info'>
                <h1>Recipe Detail</h1>
                <button>{info.strMeal}</button>
                <h3>Instructions</h3>
                <p>{info.strInstructions}</p>
                {/* <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>← Back</button> */}
            </div>
        </div>
       }
    </div>

  )
}

export default MealInfo;
