import mongoose from "mongoose";

const UserAdressSchema = new mongoose.Schema({
    userID: String,
    city: String,
    phone: String,
    type: String

})


export default mongoose.model("UserAddress", UserAdressSchema)