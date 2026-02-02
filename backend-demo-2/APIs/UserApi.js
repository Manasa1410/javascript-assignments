import exp from 'express';
import {UserModel} from '../model/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken';
export const userApp=exp.Router()

//get all users
userApp.get('/users',async(req,res)=>{
    //logic to get all users from db
    let usersList=await UserModel.find()
    res.status(200).json({message:"Users list",payload:usersList})

})
//create user
userApp.post('/users',async(req,res)=>{
    let newuser=req.body;
    //hash the password
    let hashedPassword=await hash(newuser.password,12)
    //replace plain password with hashed password
    newuser.password=hashedPassword;
    console.log(newuser)
    //craete new user document
    let newUserDocument=new UserModel(newuser)
    //save it to db
    await newUserDocument.save()
    res.status(200).json({message:"New user created"})
})

//get user by id
userApp.get('/users/:id',async(req,res)=>{
    //get id from url
    let userId=req.params.id;
    //logic to get user by id from db
    let user=await UserModel.findById(userId);
    res.status(200).json({message:"User found",payload:user})
})

//update user by id
userApp.put('/users/:id',async(req,res)=>{
    //get id from url
    let userId=req.params.id;
    //get updated user data from req body
    let modifiedUser=req.body;
    //logic to update user by id in db
    let latestUser=await UserModel.findByIdAndUpdate(userId,{$set:{...modifiedUser}},{new:true,runValidators:true})
    res.status(200).json({message:"User updated",payload:latestUser})
})

//delete user by id
userApp.delete('/users/:id',async(req,res)=>{
    //get id from url
    let userId=req.params.id
    //logic to delete user by id from db
    let deletedUser=await UserModel.findByIdAndDelete(userId)
    res.status(200).json({message:"User deleted",payload:deletedUser})})



   

    userApp.post('/auth',async(req,res)=>{
        let userCred=req.body;
        //check for username
        let userOfDB=await UserModel.findOne({username:userCred.username})
        //if user not found
        if(userOfDB===null){
            return res.status(404).json({message:"Invalid username"})
        }
        //if user found, compare passwords
        let isMatch=await compare(userCred.password,userOfDB.password)
        if(isMatch===false){
            return res.status(404).json({message:"Invalid password"})
        }
        //create a signed token
        let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
        //send token in res
       //cannot send token 
       //so we should save token in httpOnly cookie
       res.cookie('token',signedToken,{httpOnly:true,secure:false,sameSite:"lax"})
//send token in res
res.status(200).json({message:"Login Successful"})
    })