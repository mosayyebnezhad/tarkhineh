import express from 'express';
import Data from "./db.json"
import env from 'dotenv';
import mongoose from 'mongoose';
import { noConnect, userController } from './controllers';

env.config();
const app = express();
let Connection: string = process.env.MONGODB_URI || "no-mongodb-connection-string";

mongoose.connect(Connection, { autoIndex: true }).then((e) => {
  // console.log(e)
  app.listen(3000, () =>
    console.log(`Connected to DB and server running in http://localhost:${3000}`)
  
  );


  app.use('/', userController)
  app.use('/', (req,res)=>{
    return res.json({ error: 'Server Error' })
  })

}).catch(() => {
  app.listen(3000, () =>
    console.log(`NOConnected to DB and server running in http://localhost:${3000}`)
  
  );


  app.use('/', noConnect)
})














