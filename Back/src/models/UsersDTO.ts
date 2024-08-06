import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
    {

        username: {
            type: String,
            required: false,
          
        },
        isActive : Boolean,
        authCode: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        CreateDate: {
            type: Date,
            required: false
        },
        family: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false,
            unique: false,
            default: ''
        },
        phone: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false,
            minlength: 6
        },
        birthDate: {
            type: String,
            required: false
        },
        YourRating: {
            foods: [
                {
                    foodID: {
                        type: String,
                        required: false
                    },
                    rate: {
                        type: Number,
                        required: false,
                        min: 1,
                        max: 5
                    },
                    Comment: {
                        type: String,
                        required: false
                    }
                }
            ],
            Shobe: [
                {
                    shobehID: {
                        type: String,
                        required: false
                    },
                    rate: {
                        type: Number,
                        required: false,
                        min: 1,
                        max: 5
                    },
                    Comment: {
                        type: String,
                        required: false
                    }
                }
            ]
        },
        YourLovely: {
            foods: [
                {
                    type: Number
                }
            ]
        },
        Addresses: {
            type: [String],
            required: false
        }
    },
    { timestamps: true }
);


export default mongoose.model("User", UserSchema);