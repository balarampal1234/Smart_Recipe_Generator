// import { recipeModel } from "../models/Recipe.js";
// //import { savedRecipeModel } from "../models/savedrecipe.js";

// export const addRecipe = async (req, res) => {
//   const { label, image, ingredients, cuisineType, mealType, dietLabels } = req.body;
//   try {
//     let recipe = await recipeModel.create({
//       label,
//       image,
//       ingredients,
//       cuisineType,
//       mealType,
//       dietLabels,
//       user: req.user._id,
//     });
//     res.json({ message: "Recipe added successfully", recipe });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const getAllrecipe = async (req, res) => {
//   const recipes = await recipeModel.find();
//   res.json({ recipes });
// };

// export const getrecipeByid = async (req, res) => {
//   const id = req.params.id;
//   try {
//     let recipe = await recipeModel.findById(id);
//     if (!recipe) return res.json({ message: "Recipe not found" });
//     res.json({ message: "Recipe by ID", recipe });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const getRecipeByuserId = async (req, res) => {
//   const userId = req.params.id;
//   try {
//     let recipes = await recipeModel.find({ user: userId });
//     if (!recipes.length) return res.json({ message: "No recipes found" });
//     res.json({ message: "Recipes by User ID", recipes });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };





import { recipeModel } from "../models/Recipe.js";
import fetch from "node-fetch";

const EDAMAM_APP_ID = "cbd0f1e8";
const EDAMAM_APP_KEY = "8f92274cf11e27f5dae4c4f286e6e1b3";

export const addRecipe = async (req, res) => {
  const { label, image, ingredients, cuisineType, mealType, dietLabels } = req.body;
  try {
    let recipe = await recipeModel.create({
      label,
      image,
      ingredients,
      cuisineType,
      mealType,
      dietLabels,
      user: req.user._id,
    });
    res.json({ message: "Recipe added successfully", recipe });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllrecipe = async (req, res) => {
  const recipes = await recipeModel.find();
  res.json({ recipes });
};

export const getrecipeByid = async (req, res) => {
  const id = req.params.id;
  try {
    let recipe = await recipeModel.findById(id);
    if (!recipe) return res.json({ message: "Recipe not found" });
    res.json({ message: "Recipe by ID", recipe });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getRecipeByuserId = async (req, res) => {
  const userId = req.params.id;
  try {
    let recipes = await recipeModel.find({ user: userId });
    if (!recipes.length) return res.json({ message: "No recipes found" });
    res.json({ message: "Recipes by User ID", recipes });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// New: Search recipes in MongoDB and Edamam API
export const searchRecipes = async (req, res) => {
  const { query, mealType, cuisineType, dietLabels } = req.query;
  
  try {
    // MongoDB search
    let mongoQuery = {
      label: { $regex: query, $options: "i" },
    };
    if (mealType) mongoQuery.mealType = mealType;
    if (cuisineType) mongoQuery.cuisineType = cuisineType;
    if (dietLabels) mongoQuery.dietLabels = { $in: [dietLabels] };

    const mongoResults = await recipeModel.find(mongoQuery);

    // If MongoDB has results, return them
    if (mongoResults.length > 0) {
      return res.json({ message: "Recipes from MongoDB", recipes: mongoResults });
    }

    // Edamam API fallback
    const edamamResponse = await fetch(
      `https://api.edamam.com/search?q=${query}&mealType=${mealType}&cuisineType=${cuisineType}&diet=${dietLabels}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
    );
    const edamamData = await edamamResponse.json();

    const edamamRecipes = edamamData.hits.map((hit) => hit.recipe);

    // Optionally store the fetched Edamam recipes in MongoDB
    for (const edamamRecipe of edamamRecipes) {
      await recipeModel.create({
        label: edamamRecipe.label,
        image: edamamRecipe.image,
        ingredients: edamamRecipe.ingredientLines,
        cuisineType: edamamRecipe.cuisineType,
        mealType: edamamRecipe.mealType,
        dietLabels: edamamRecipe.dietLabels,
      });
    }

    res.json({ message: "Recipes from Edamam API", recipes: edamamRecipes });
  } catch (error) {
    res.json({ message: error.message });
  }
};

