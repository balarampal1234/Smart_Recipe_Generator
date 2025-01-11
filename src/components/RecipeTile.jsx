import "./RecipeTile.css";
import { Link } from "react-router-dom";
const RecipeTile = ({ recipe }) => {
  // Check if the recipe has an image
  if (!recipe["recipe"]["image"]) {
    return null; // If no image, return nothing (null) and don't render this recipe
  }
  const recipeId = encodeURIComponent(recipe.recipe.uri); // Encode URI to use it in URL

  return (
    <div className="recipe-tile">
      <img
        className="recipe-tile-img"
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
      />
      <p className="recipe-tile-name">{recipe.recipe.label}</p>

      {/* Link to the RecipeDetail page using the recipe URI */}
      <Link to={`/recipe/${recipeId}`} className="no-underline">
        <button>View Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeTile;
