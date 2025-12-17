const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");

exports.postRegister = async (req,res) => {
    const { name,email,password } = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,12);

        const newUser = new userModel ({
            name,
            email,
            password:hashedPassword
        });

        await newUser.save();

        res.status(200).json({message:"User saved successfully"});
    } catch(err) {

        //Checking for duplicate emails.
        if(err.code === 11000) {
           return res.status(400).json({message:"User already exists."});
        }
        res.status(500).json({message:"Internal server error."});
    }
}

exports.postLogin = (req,res) => {
    res.send("Login page");
}
