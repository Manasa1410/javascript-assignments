import {Schema,model} from 'mongoose';
//product Schema
const productSchema=new Schema({
    productName:{
    type:String,
    required:[true,"product name  is required"],
},
price:{
    type:Number,
    min: [1, "price must be greater than 0"]
}
},
{
    strict:"throw",
    timestamps:true
})

export const ProductModel=model("product",productSchema)