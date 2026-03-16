// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true
//     },

//     email:{
//         type:String,
//         unique:true,
//         required:true
//     },

//     password:{
//         required:true,
//         type:String
//     }


// }, {timestamps:true});

// export default mongoose.model("User",userSchema);

// // Run once to seed data
// await User.create({ name: "Test User" });

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, unique: true, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;