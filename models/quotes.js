import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema({
    name:String,
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

mongoose.model("Quote",quotesSchema);