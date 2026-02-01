import exp from 'express';
import {ProductModel} from '../model/ProductModel.js'
export const productApp=exp.Router();

productApp.get('/products',async(req,res)=>{
     // read the products
    let productList=await ProductModel.find()
    res.status(200).json({message:"users",payload:productList});
})  

productApp.post('/products',async (req,res)=>{
    //get newProduct from req
    let newProduct=req.body;
    console.log(newProduct)
    //create new product document
    let newProductDoc=new ProductModel(newProduct)
    //save in db
    await newProductDoc.save();
    res.status(201).json({message:"product creted"})

})

//read product by id
productApp.get('/products/:id',async (req,res)=>{
    //get objectID from url parse
    let prodId=req.params.id;
    //find product in DB 
    let prodObj=await ProductModel.findById(prodId);
    //send res
    res.status(200).json({message:"product",payload:prodObj})
})


//update product
productApp.put("/products/:id",async (req,res)=>{
    //get objId from url params
    let prodId=req.params.id
    //get modified from products
    let modifiedProduct=req.body;
    //make update
    let latestProduct=await ProductModel.findByIdAndUpdate(prodId,
        {$set:{...modifiedProduct}},
        {new:true,runValidators:true});
    //send res
    res.status(202).json({message:"product modified",payload:latestProduct})
})

//Delete product 

productApp.delete("/products/:id",async (req,res)=>{
    //get obj by id
    let objId=req.params.id;
    //delete product by id 
    let productUser=await ProductModel.findByIdAndDelete(objId)
    res.status(200).json({message:"product removed",payload:productUser})

})