import {Schema,model} from 'mongoose'
//create user schema
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[3,"Username must be at least 3 caharacters long"],
        maxLength:[30,"Username cannot exceed 30 characters"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],

    },
    age:
    {
        type:Number,
        min:[18,"Age must be atleast 18"],
        max:[25,"Age cannot exceed 25"]
    }


},{
    strict:true,
    timestamp:true
})
//create user model
export const UserModel=model('User',userSchema)