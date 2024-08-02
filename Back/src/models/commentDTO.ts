import mongoose from "mongoose";

const commentShema = new mongoose.Schema({
    CommentID: String,
    userID: String,
    commentText: String,
    date: Date,
   

})


export default mongoose.model("comments", commentShema)