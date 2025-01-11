import express from'express';
import { addRecipe, getAllrecipe, getrecipeByid, getRecipeByuserId, searchRecipes, 

} from '../controller/recipe.js';

// import { addRecipe, getAllrecipe, getrecipeByid, getRecipeByuserId, getSavedrecipe, savedrecipeById } from '../controller/recipe.js';

import { Authentication } from '../Middlewire/auth.js';

const router=express.Router();
//create and add recipe
router.post('/add',Authentication,addRecipe)

//getallrecipe
router.get('/',getAllrecipe)

//get all saved recipe
// router.get('/saved',getSavedrecipe)

//getrecipeByid
router.get('/:id',getrecipeByid)

//getRecipeByuserId
router.get('/user/:id',getRecipeByuserId)

//savedRecipeByid
// router.post('/:id',Authentication,savedrecipeById)



//to get combined recipe from api and db
router.get("/search", searchRecipes);

export default router;