import {userModel} from '../models/user.js'
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';

export const register=async(req,res)=>{
  const{name,gmail,password}=req.body;
  try{
    let user=await userModel.findOne({gmail})
    if(user) return res.json({message:"User Already exist"});

    const hashPass=await bcrypt.hash(password,10)
      user=await userModel.create({name,gmail,password:hashPass})
    res.json({message:"User Register successfully..!",user});
  }catch(error){
      res.json({message:error.message})
  }
}

export const login=async(req,res)=>{
 const{gmail,password}=req.body;
 try {
  let user=await userModel.findOne({gmail})
  if(!user) return res.json({message:"User not Exist"})
    const validPass=await bcrypt.compare(password,user.password);

  if(!validPass) return res.json({message:"wrong credential"})

    const token=jwt.sign({userId:user._id},"secret")

    res.json({message:`Welcome ${user.name}`,token});
 } catch (error) {
  res.json({message:error.message});
 }
}


export const profile=async(req,res)=>{
  res.json({user:req.user})
  
}  //we use here req.user that we saved in middleware