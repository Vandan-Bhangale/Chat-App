const User = require("../Models/userModel");

exports.getUser = async (req,res) => {
    try {
        console.log("Get user controller hit")
        const loggedInUser = req.user._id;
        const filterUser = await User.find({_id:{$ne: loggedInUser}}).select("-password");

        res.status(200).json(filterUser);
    } catch (err) {
        console.log("Error while fetching users: ",err.message);
        return res. status(500).json({ message: "Internal server error" });
    }
}