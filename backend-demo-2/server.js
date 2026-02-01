import exp from 'express';
import {connect} from 'mongoose';
import {userApp} from './APIs/UserApi.js'
import {productApp} from './APIs/ProductApi.js'
const app=exp();
const port=4000;

async function connectDB()
{
    try{
        await connect('mongodb://localhost:27017/mernDB')
            console.log("Connected to MongoDB Successfully")
            app.listen(port,()=>{
                console.log(`Server is running on port ${port}`) 

                      })


    }
    catch(err){
        console.log("Error connecting to MongoDB", err)
    }
}
connectDB();
app.use(exp.json());

app.use('/user-api',userApp)
app.use('/product-api',productApp)
