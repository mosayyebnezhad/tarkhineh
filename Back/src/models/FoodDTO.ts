import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    ID: String,
    name: String,
    detail: String,
    Image: String,
    Branch: String,
    price: {
        priceView: String,
        solidPriceView: String,
        price: Number,
        Off: Number
    },
    Rate: {
        rating: Number,
        count: Number
    },
    RateID: String,
    CommentID: String,
    Category: [String],
    CreateDate: Date,
    UpdateDate: Date,

})


export default mongoose.model("Food", FoodSchema)