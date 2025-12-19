const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");

exports.postRegister = async (req,res) => {
    const { name,email,password,gender } = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,12);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${name}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${name}`;

        const newUser = new userModel ({
            name,
            email,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();

        res.status(200).json({message:"User saved successfully",newUser});
    } catch(err) {

        //Checking for duplicate emails.
        if(err.code === 11000) {
           return res.status(400).json({message:"User already exists."});
        }
        res.status(500).json({message:"Internal server error."});
    }
}

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 3. Generate JWT & set cookie
    const token = await user.generateToken();

    //Store token in cookie
    res.cookie("jwt", token, {
      httpOnly: true, // prevents XSS
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });

    // 4. Success response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        profilePic:user.profilePic
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

