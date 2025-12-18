const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        requierd:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    },
    Time: {
        type:String,
        default:Date.now()
    }
});

userSchema.methods.generateToken = async function() {
    try {
       return jwt.sign({
            userId:this._id.toString(),
            name:this.name
        },process.env.JWTSECRET,{
            expiresIn:"30d"
        }) 
    } catch (err) {
        console.log("Error while generating token.",err);
    }
}

const User = mongoose.model("User",userSchema);

module.exports = User;