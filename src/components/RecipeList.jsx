import React from "react";
import RecipeTile from "./RecipeTile";

function RecipeList({ recipes, noresult }) {
  return (
    <div className="app-recipe">
      {noresult ? (
        <p className="noresult">
          No recipes found. Please try searching again.
        </p>
      ) : (
        recipes.map((recipe, index) => (
          <RecipeTile key={index} recipe={recipe} />
        ))
      )}
    </div>
  );
}

export default RecipeList;
