import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// REGISTER USER
export const registerUser = async (req, res ) => {
    try{
        const {username, email, password} = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message:"User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });

        res.status(201).json({
            message:"User registered successfully",
            user
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


// LOGIN USER
export const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(404).json({
                message:"User not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch){
            return res.status(401).json({
                message:"Invalid credentials"
            });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email},
            process.env.JWT_SECRET,
            { expiresIn: "1h"}
        );

        res.status(200).json({
            message:"Login successful",
            token
        });
    }catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


//GET USER PROFILE

export const getUserProfile = async (req, res) => {
    
  
  try {
      console.log(req.user);
    res.status(200).json({
      message: "User data fetched successfully",
      user: req.user
  
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
