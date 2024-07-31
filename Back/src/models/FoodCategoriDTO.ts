import mongoose from "mongoose";

const FoodCategoryDTO = new mongoose.Schema({
    id:String,
    name:String

})


export default mongoose.model("FoodCategory", FoodCategoryDTO)