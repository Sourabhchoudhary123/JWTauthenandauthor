import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        required:true,
        type:String
    }


}, {timestamps:true});

export default mongoose.model("User",userSchema);