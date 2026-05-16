const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");

exports.postRegister = async (req, res) => {
  const { name, email, password, gender } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const profilePic = `https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`;

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      gender,
      profilePic,
    });

    await newUser.save();

    res.status(200).json({ message: "Register successfully", newUser });
  } catch (err) {
    //Checking for duplicate emails.
    if (err.code === 11000) {
      return res.status(400).json({ message: "User already exists." });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};

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
      secure: true, //For production
      sameSite: "none", //For production
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // 4. Success response
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        profilePic: user.profilePic,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getLogout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 0,
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.log("Error while logout the uesr: ", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getMe = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (err) {
    console.log("Error while checking login status: ", err.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
