import exp from 'express'
export const productApp=exp.Router()
let products=[]

productApp.get('/products',(req,res)=>{
        //sends response to client
        res.status(200).json({"message":"all products",payload:products})
      })

      productApp.post('/products',(req,res)=>{
        //get user resource from req
        let newproduct=req.body
        //console.log("new user:",newproduct)
        products.push(newproduct);
         res.status(201).json({"message":"product created"})
        
      })

      productApp.put('/products/id',(req,res)=>{
        //get modifies user from req
        let modifiedproduct=req.body
        //find the user with id exist in array
        let productIndex=products.find(productobj=>productobj.id===modifiedproduct.id)
        //if user not found,send res as "user not found"
        if(productIndex===-1){
          return res.status(404).json({message:"product not founf"})
        }
        //if user found then modify the user
        let deletedproduct=products.splice(productIndex,1,modifiedproduct)
        //send res as "User modified"
        res.status(200).json({message:"product modified"})
      })

      productApp.get('/products-id/:id',(req,res)=>{
         console.log(req.params)
          //read id from url parameter
          let productId=Number(req.params.id)
          //reasd user by this id
          let product=products.find(productobj=>productobj.id===productId)
          if(!product){
            return res.status(404).json({message:"product not found"})
          }
          res.status (200).json({message:"product",payload:product})
      })

      productApp.get('/products-brand/:brand',(req,res)=>{
         console.log(req.params)
          //read id from url parameter
          let productbrand=req.params.brand
          //reasd user by this id
          let product=products.find(productobj=>productobj.brand===productbrand)
          if(!product){
            return res.status(404).json({message:"product not found"})
          }
          res.status (200).json({message:"product",payload:product})
      })

  productApp.delete('/products/:id',(req,res)=>{
        let productId=Number(req.params.id)
         let productIndex=products.find(productobj=>productobj.id===productId)
         if(productIndex===-1){
          return res.status(404).json({message:"product not founf"})
        }
        let deleteproduct=products.splice(productIndex,1);
        res.status(200).json({message:"product deleted",payload:deleteproduct});

        //res.json({"message":"This response from delete req handler"})
      })