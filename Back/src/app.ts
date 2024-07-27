import express from 'express';
import Data from "./db.json"
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/" , (req,res)=>{
  
  return res.json(Data.users);
})

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
