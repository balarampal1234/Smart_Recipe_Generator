import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js';
import cors from 'cors';

const port=3000;
const app=express();
app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))

mongoose.connect("mongodb+srv://balarampal136:70GjRSZnFHplPuzA@cluster0.adczb.mongodb.net/",{
  dbName:"MERN_RECIPE_GENERATOR"
}).then(()=>console.log("mongodb conected successfully")).catch((err)=>console.log(err.messsage));


//userRouter
app.use('/api',userRouter)// when we go to   /api/register it will redirect  to /register if we write ('/',userRouter) when we go to /register it will redirect  to /register


//recipe router
app.use('/api',recipeRouter)

app.listen(port,()=>console.log(`server listen at post ${port}`));

// USERNAME=balarampal136
// PASSWORD=70GjRSZnFHplPuzA