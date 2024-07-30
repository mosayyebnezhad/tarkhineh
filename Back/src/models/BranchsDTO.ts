const mongoose = require('mongoose');

const BranchsChema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    WorgingTimeStart: { type: Number, required: true },
    WorgingTimeEnd: { type: Number, required: true },
    
});


export default mongoose.model("Branchs", BranchsChema)
