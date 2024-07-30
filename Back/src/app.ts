import express from 'express';
import Data from "./db.json"
import env from 'dotenv';
const app = express();
env.config();
const PORT = process.env.PORT;
app.get("/" , (req,res)=>{
  
  // return res.json(Data.users);
  
 return res.json(process.env.PORT);
})

app.listen(3000, () =>
  console.log(`server running in http://localhost:${3000}`)
);
