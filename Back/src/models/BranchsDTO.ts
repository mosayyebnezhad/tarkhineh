import { Schema, model } from "mongoose";

import mongoose from "mongoose";
const BranchsChema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    WorgingTimeStart: { type: Number, required: true },
    WorgingTimeEnd: { type: Number, required: true },

});


export default model("Branchs", BranchsChema)
