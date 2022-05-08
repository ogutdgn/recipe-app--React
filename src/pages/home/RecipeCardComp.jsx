import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyles'

const RecipeCardComp = ({meal}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", {state:{meal}})
    // useNavigate("/details", {state:{recipe1}});
  }

  return (
   <RecipeCard>

      <RecipeHeader>
        {meal.label}
      </RecipeHeader>

      <RecipeImage src={meal.image} />

      <Button onClick={handleClick}>View More</Button>

    </RecipeCard>
  )
}

export default RecipeCardComp