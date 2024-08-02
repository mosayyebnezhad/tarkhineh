import express from 'express';
import Data from "./db.json"
import env from 'dotenv';
import mongoose from 'mongoose';
import { addressContoller, authController, branchController, FoodController, noConnect, orderControllers, userController } from './controllers';


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
  app.use('/auth', authController)
  app.use('/food', FoodController)
  app.use('/branch', branchController)
  app.use('/address', addressContoller)
  app.use('/order', orderControllers)

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














