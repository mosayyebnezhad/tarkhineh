import mongoose from "mongoose";

const UserAdressSchema = new mongoose.Schema({
    userID: String,
    city: String,
    address: String,
    phone: String

})


export default mongoose.model("address", UserAdressSchema)