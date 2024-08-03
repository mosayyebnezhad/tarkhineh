import express from 'express';
import Data from "./db.json"
import env from 'dotenv';
import mongoose from 'mongoose';
import { addressContoller, authController, branchController, FoodController, noConnect, orderControllers, userController } from './controllers';
import cors from 'cors';
const port = 8080
env.config();

const app = express();
app.use(cors)
app.use(express.json());
// app.use(cors());
let Connection: string = process.env.MONGODB_URI || "no-mongodb-connection-string";

mongoose.connect(Connection, { autoIndex: true }).then((e) => {
  // console.log(e)
  app.listen(port, () =>
    console.log(`Connected to DB and server running in http://localhost:${port}`)

  );

  //  Controlles
  app.use('/user', userController)
  app.use('/auth', authController)
  app.use('/food', FoodController)
  app.use('/branch', branchController)
  app.use('/address', addressContoller)
  app.use('/order', orderControllers)


}).catch(() => {
  app.listen(port, () =>
    console.log(`NOConnected to DB and server running in http://localhost:${port}`)

  );


  app.use('*', noConnect)
})














