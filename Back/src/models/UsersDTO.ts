import mongoose from "mongoose";




const UserSchema = new mongoose.Schema(
    {
        id: Number,
        username: String,
        name: String,
        family: String,
        email: String,
        phone: String,
        password: String,
        birthDate: String,
        YourRating: {
            foods: [
                {
                    foodID: String,
                    rate: Number,
                    Comment: String
                }
            ],
            Shobe: [
                {
                    shobehID: String,
                    rate: Number,
                    Comment: String
                }
            ]
        },
        YourLovely: {
            foods: [Number]
        },
        Addresses: { type: [String], required: true }
    }
)



export default mongoose.model("User", UserSchema)
