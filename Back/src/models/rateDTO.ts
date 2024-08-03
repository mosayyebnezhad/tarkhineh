import mongoose from "mongoose";

const rateShema = new mongoose.Schema({
    RateID: String,
    userID: String,
    rate: Number,
    date: Date,
  
})


export default mongoose.model("rate", rateShema)