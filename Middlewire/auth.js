import { userModel } from "../models/user.js";

import jwt from 'jsonwebtoken';

export const Authentication=async(req,res,next)=>{
  const token=req.header("Auth")
  try {
    if(!token) return res.json({message:"Login first"})
      const decode=jwt.verify(token,"secret");
    console.log(decode);
    const id=decode.userId;
    let user=await userModel.findById(id)
    if(!user) return res.json({message:"user not exist"})

      req.user=user;//here we save the user in req.body so that when we use middleware so that we can access the user & (we can access the user in any backend file from req.body) but it should be saved like this in middleware
  
    next();
  } catch (error) {
    
  }
}