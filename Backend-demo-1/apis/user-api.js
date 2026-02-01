import exp from 'express'
//create mini express(Seperate Route) app
export const userApp=exp.Router()

let users=[];


    //Create Api(request handlers - route)
    //Create Api(request handlers - route)

      // get request handling route
      userApp.get('/users',(req,res)=>{
        //sends response to client
        res.status(200).json({"message":"all users",payload:users})
      })
      // post request handling route
      userApp.post('/users',(req,res)=>{
        //get user resource from req
        let newUser=req.body
        //console.log("new user:",newUser)
        users.push(newUser);
         res.status(201).json({"message":"User created"})
        
      })
      // put request handling route
      userApp.put('/users/id',(req,res)=>{
        //get modifies user from req
        let modifiedUser=req.body
        //find the user with id exist in array
        let userIndex=users.find(userobj=>userobj.id===modifiedUser.id)
        //if user not found,send res as "user not found"
        if(userIndex===-1){
          return res.status(404).json({message:"User not founf"})
        }
        //if user found then modify the user
        let deletedUser=users.splice(userIndex,1,modifiedUser)
        //send res as "User modified"
        res.status(200).json({message:"User modified"})
        /*let userId=req.params.userId
        let updateUser=req.body
        let f=users.findIndex(obj=>obj.id===userId)
        if(userId===-1)
        {
          res.json({"message":"User not found"})
        }
        users[index] = { ...users[index], ...updatedUser };
        
        res.json({"message:":"User modified"})*/

      })


      //read user by id
      userApp.get('/users/:id',(req,res)=>{
         console.log(req.params)
          //read id from url parameter
          let userId=Number(req.params.id)
          //reasd user by this id
          let user=users.find(userobj=>userobj.id===userId)
          if(!user){
            return res.status(404).json({message:"User not found"})
          }
          res.status (200).json({message:"user",payload:user})
      })
      // delete request handling route
      userApp.delete('/users/:id',(req,res)=>{
        let userId=Number(req.params.id)
         let userIndex=users.find(userobj=>userobj.id===userId)
         if(userIndex===-1){
          return res.status(404).json({message:"User not founf"})
        }
        let deleteUser=users.splice(userIndex,1);
        res.status(200).json({message:"user deleted",payload:deleteUser});

        //res.json({"message":"This response from delete req handler"})
      })