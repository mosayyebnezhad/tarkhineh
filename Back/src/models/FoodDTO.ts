import mongoose from "mongoose";
import FoodCategoryDTO from "./FoodCategoriDTO"
const FoodSchema = new mongoose.Schema({
    ID: String,
    name: String,
    detail: String,
    price: {
        priceView: String,
        solidPriceView: String,
        price: Number,
        Off: Number
    },
    Rate: {
        rating: Number,
        SumRating: Number,
        SumPeaopleRated: Number,
        papularoty: Number
    },
    Comments: [
        {
            UserId: String,
            comment: String,
            date: String
        }
    ],
    Category: FoodCategoryDTO

})


export default mongoose.model("FoodSchema", FoodSchema)