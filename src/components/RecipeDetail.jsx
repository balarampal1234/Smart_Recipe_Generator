import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Loading from "./Loading";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams(); // to Get the recipe URI from the URL params
  const [recipeDetails, setRecipeDetails] = useState(null);

  const YOUR_APP_ID = "cbd0f1e8";
  const YOUR_APP_KEY = "8f92274cf11e27f5dae4c4f286e6e1b3";
  useEffect(() => {
    const fetchRecipe = async () => {
      const url = `https://api.edamam.com/search?r=${encodeURIComponent(
        id
      )}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
      const res = await Axios.get(url);
      setRecipeDetails(res.data[0]); // Recipe data will be an array, so take the first item
    };

    fetchRecipe();
  }, [id]);

  if (!recipeDetails) {
    return <Loading />; // Show spinner while loading
  }

  // Extract additional nutrients from totalNutrients
  const { calories, totalNutrients } = recipeDetails;

  const nutrients = {
    Calories: Math.round(calories), // Rounded calories
    Fat: totalNutrients.FAT ? totalNutrients.FAT.quantity.toFixed(1) : "N/A",
    Protein: totalNutrients.PROCNT
      ? totalNutrients.PROCNT.quantity.toFixed(1)
      : "N/A",
    Carbs: totalNutrients.CHOCDF
      ? totalNutrients.CHOCDF.quantity.toFixed(1)
      : "N/A",
    Fiber: totalNutrients.FIBTG
      ? totalNutrients.FIBTG.quantity.toFixed(1)
      : "N/A",
    Sugar: totalNutrients.SUGAR
      ? totalNutrients.SUGAR.quantity.toFixed(1)
      : "N/A",
  };

  return (
    <div className="recipe-container">
      <h1>{recipeDetails.label}</h1>
      <div className="image-container">
        <img src={recipeDetails.image} alt={recipeDetails.label} />
      </div>

      {/* Display Nutritional Information */}
      <h2>Nutritional Information (per serving):</h2>
      <ul className="nutrition-list">
        <li>Calories: {nutrients.Calories} kcal</li>
        <li>Fat: {nutrients.Fat} g</li>
        <li>Protein: {nutrients.Protein} g</li>
        <li>Carbohydrates: {nutrients.Carbs} g</li>
        <li>Fiber: {nutrients.Fiber} g</li>
        <li>Sugar: {nutrients.Sugar} g</li>
      </ul>

      <h2>Ingredients:</h2>
      <ul>
        {recipeDetails.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions:</h2>
      <a href={recipeDetails.url} target="_blank" rel="noopener noreferrer">
        Click here for detailed instructions
      </a>
    </div>
  );
};

export default RecipeDetail;
