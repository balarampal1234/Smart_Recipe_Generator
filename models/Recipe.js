// import mongoose from 'mongoose';

// const recipeSchema=mongoose.Schema({
//   title:{
//     type:String,
//     required:true
//   },
//   inst:{
//     type:String,
//     required:true
//   },
//   ing1:String,
//   ing2:String,
//   ing3:String,
//   ing4:String,
//   qty1:String,
//   qty2:String,
//   qty3:String,
//   qty4:String,
//   imgUrl:{type:String,required:true},
//   user:{type:mongoose.Schema.Types.ObjectId,
//   ref:"user"
//   }
// });

// export const recipeModel=mongoose.model("recipe",recipeSchema)

import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], 
    required: true,
  },
  cuisineType: {
    type: [String], 
    required: true,
  },
  mealType: {
    type: [String], 
    required: true,
  },
  dietLabels: {
    type: [String], 
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
});

export const recipeModel = mongoose.model('recipe', recipeSchema);
