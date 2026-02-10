import { genToken } from "../lib/util.js";
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import cloudinary from '../lib/cloudinary.js'

export const DefaultPath = (req, res) => {
  res.status(404).json({
    status: 404,
    message: "API endpoint does not exist",
    method: req.method,
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  });
};

export const Signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        status: 0,
        message: "Missing required fields",
      });
    }

    if (password.length < Number(process.env.PASSWORD_LENGTH || 6)) {
      return res.status(403).json({
        status: 0,
        message: "Password must be 6 or more characters",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: 0,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    genToken(newUser._id, res);

    return res.status(201).json({
      status: 1,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: "Internal server error at signup",
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 0,
        message: "Missing required fields",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: 0,
        message: "user does not exsists",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        status: 0,
        message: "Invalid credentials",
      });
    }

    console.log(`this is log\n
      ${user._id}`)

    genToken(user._id, res);

    res.status(200).json({
      status: 1,
      message: "login success",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error at login",
    });
  }
};

export const Logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 }).status(200).json({
    status: 0,
    message: "logout success",
  });
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id
    
    if (!profilePic) {
      return res.status(400).json({
        status: 0,
        message: "No profile picture found"
      })
    }

    if (!userId) {
      return res.status(400).json({
        status: 0,
        message: "No user found"
      })
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic)
    const updateduser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new: true})

    res.status(200).json({
      status: 1,
      message: `updated profile picture for ${userId}`
    })
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error"
    })
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json({
      status: 1,
      message: "Authorized user",
      user: req.user
    })
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error"
    })
  }
}