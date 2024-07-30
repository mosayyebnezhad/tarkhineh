import express from 'express';
import { userController } from './controllers';
const app = express();
const Routers = ()=>{
   
        app.use('/', userController)


        app.use('/', (req,res)=>{
          return res.json({ error: 'Server Error' })
        })
    
}

export default Routers;