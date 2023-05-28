import React from 'react'
import {getOneRecipe} from '../api';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Preloader from '../components/Preloader'
import Ingredient from "./Ingredient";
import ReactPlayer from "react-player/youtube";



const RecipeItem = () => {
const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])
  const URL_DETAILS = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const { id } = useParams()
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`${URL_DETAILS}${id}`)
        const data = await res.json()
        setRecipe(data.meals[0])
        Object.keys(data.meals[0]).forEach((key) => {
          if (key.includes('strIngredient') && data.meals[0][key] !== "") {
            setIngredients(prev => {
              if (prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }


          if (key.includes('strMeasure') && data.meals[0][key] !== "") {
            setMeasures(prev => {
              if (prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipeDetails()
  }, [id]); 

  useEffect(() => {
    getOneRecipe(id).then(data => {
        data.meals[0].idMeal && setRecipe(data.meals[0]);
        setLoading(false);
    });
}, [id]);

return (
  <> 
  {loading ? (
        <Preloader />
    ) : recipe.idMeal ? (
      <>
  <div className="container mb-3">
  <div className="margin-tb row mb-3 meal-info">
  <h3 className="">
          <span>{recipe?.strMeal}</span>
          </h3>
  <div className="col s12 m8 mb-3" >
          <img
            className="materialboxed responsive-img"
            src={recipe?.strMealThumb}
            alt={`${recipe.strMeal} meal`}
          />
      </div>
    </div>
      
    
    <div className="row">
      <div className="col s12">
        <h4 className="">
          <span >Ingredients</span>
        </h4>
        <div className="">
        {ingredients?.map((ingredient, i) => (
              
             <Ingredient key={i} ingredient={ingredient} measures={measures[i]} />
             
        
            ))}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <h4>
          <span>Instructions</span>
        </h4>
        <p style = {{textAlign: "justify"}} className="flow-text">{recipe.strInstructions}</p>
      </div>
    </div>
    {recipe.strYoutube && (
      <><h4>Video instruction</h4>
      <div className="row center-align">
        <div>
        
          <div className="player-wrapper video-container">
            <ReactPlayer
              className="react-player"
              url={recipe.strYoutube}
              pip={true}
              stopOnUnmount={false}
            />
          </div>
        </div>
      </div>
      </>
    )}
      
  </div>
  </>
    ) : (
      <p>Failed to load recipe</p>
      )}
      </>
);
};

export default RecipeItem