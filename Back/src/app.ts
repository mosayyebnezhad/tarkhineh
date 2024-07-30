import express from 'express';
import Data from "./db.json"
import env from 'dotenv';
import mongoose from 'mongoose';
import { FoodController, noConnect, userController } from './controllers';
import Routers from './Routers';

env.config();
const app = express();
app.use(express.json());
// app.use(cors());
let Connection: string = process.env.MONGODB_URI || "no-mongodb-connection-string";

mongoose.connect(Connection, { autoIndex: true }).then((e) => {
  // console.log(e)
  app.listen(3000, () =>
    console.log(`Connected to DB and server running in http://localhost:${3000}`)

  );

  //  main Controlles
  app.use('/user', userController)
  // app.use('/food', FoodController)

  // app.use('/User', FoodController)


  // app.use('/Useraddress', FoodController)
  // app.use('/Order', FoodController)
  // app.use('/Order', FoodController)









}).catch(() => {
  app.listen(3000, () =>
    console.log(`NOConnected to DB and server running in http://localhost:${3000}`)

  );


  app.use('*', noConnect)
})














