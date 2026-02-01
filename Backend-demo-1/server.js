//create http server 
    //import express module
    import exp from 'express' //direct estam coz it is inbuilt manam create cheyalie kabati direct
    import {userApp} from "./apis/user-api.js"
    import {productApp} from "./apis/product-api.js"
    //create server 
    const app=exp()           // app lo http server untadi 
    //assign port number 
    app.listen (3000,()=>console.log('HTTP server listening on port 3000'))//port number na istam undi randomly 3000 petkuna

//body parsing middleware
app.use(exp.json()) 

//forward request to userApp when path starts with "/user-api"
app.use('/user-api',userApp)
app.use('/product-api',productApp)

/*//create a custom middleware
function middleware1(req,res,next){
  console.log("middleware-1 executed")

  //res.json({message:"res from middleware"})
  //forward req to next middleware
  next()
}



function middleware2(req,res,next){
  console.log("middleware-2 executed")

  //res.json({message:"res from middleware"})
  //forward req to next middleware
  next()
}
//to execyte every incoming request
//app.use(middleware1)
//app.use(middleware2)

//test local in-memory data*/




