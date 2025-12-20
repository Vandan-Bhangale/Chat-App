const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const protect = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        // console.log("Cookies received:", req.cookies);
        if(!token) {
            return res.status(401).json({error:"Unauthorized - No token provide."});
        }

        const decode = jwt.verify(token,process.env.JWTSECRET);

        if(!decode) {
            return res.status(401).json({error:"Unauthorized - No token provide."});
        }

        const user = await User.findById(decode.userId).select("-password");

        if(!user) {
            return res.status(404).json({error:"User not found."});
        }

        req.user = user;
        next();
    } catch (err) {
        console.log("Error in Protect middleware.",err);
        return res.status(500).json({error:"Internal Server error."});
    }
}

module.exports = protect;