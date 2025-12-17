const mongoose = require("mongoose");

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
    Time: {
        type:String,
        default:Date.now()
    }
});

const User = mongoose.model("User",userSchema);

module.exports = User;