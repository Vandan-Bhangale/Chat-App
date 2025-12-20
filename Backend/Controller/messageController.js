const Conversation = require("../Models/conversation");
const Message = require("../Models/messages");

exports.sendMessage = async (req,res) => {
    try{
        const {message} = req.body;
        const {id:recevierId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all :[recevierId,senderId]}
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants:[recevierId,senderId],
            })
        }

        const newMessage = new Message ({
            recevierId,
            senderId,
            message
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await conversation.save();
        await newMessage.save();

        res.status(200).json(newMessage);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Internal server error."});
    }
}

exports.getMessage = async (req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all: [userToChatId,senderId]}
        }).populate("messages");

        if(!conversation) {
            return res.status(400).json({error:"No Conversation found."});
        }

        const message = conversation.messages;
        res.status(200).json(message);

    } catch (err) {
        console.log("Error in getMessage",err.message);
        return res.status(500).json({error:"Internal server error."});
    }
}
