import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const UserSchema = new Schema(
    {

        username: {
            type: String,
            required: false,
            unique: false
        },
        name: {
            type: String,
            required: false
        },
        family: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true

        },
        phone: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: true,
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


// هش کردن رمز عبور قبل از ذخیره کاربر
// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

export default mongoose.model("User", UserSchema);