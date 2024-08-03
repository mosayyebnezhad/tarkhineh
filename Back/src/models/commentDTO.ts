import mongoose from "mongoose";

const commentShema = new mongoose.Schema({
    CommentID: String,
    userID: String,
    commentText: String,
    date: Date,
   //NICE hello
   //ALERT hello
   //IMPORTANT hello
   //INFO hello
   //TODO hello
})


export default mongoose.model("comments", commentShema)