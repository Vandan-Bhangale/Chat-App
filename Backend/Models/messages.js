const mongoose = require("mongoose");

const mesaageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    recevierId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message: {
        type:String,
        required:true
    }
},{timestamps:true});

const messages = mongoose.model("Messages",mesaageSchema);

module.exports = messages;