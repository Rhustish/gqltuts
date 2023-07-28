import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email: String,
    password:String,
})

mongoose.model("User",userSchema);