import express from 'express';
import {register,login, profile} from '../controller/user.js';
import { Authentication } from '../Middlewire/auth.js';

const router=express.Router();


//user register
router.post('/register',register)

//user login
router.post('/login',login)

//user profile
router.get('/user',Authentication,profile)

export default router;