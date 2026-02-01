import exp from 'express';
import {UserModel} from '../model/UserModel.js'
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