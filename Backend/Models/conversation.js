const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
    mesaages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Messages",
        default:[]
    }]
},{timestamps:true});

const conversation = mongoose.model("Conversation",conversationSchema);

module.exports = conversation;