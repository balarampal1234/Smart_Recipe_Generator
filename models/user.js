import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
  name:{type:String,required:true},
  gmail:{type:String,required:true},
  password:{type:String,required:true},
})

export const userModel=mongoose.model("user",userSchema);