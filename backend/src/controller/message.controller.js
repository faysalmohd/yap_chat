import User from "../model/user.model.js";
import Message from "../model/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json({
      status: 1,
      message: "users fetched apart from logged in user",
      users: filteredUsers,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error at getUsersForSidebar",
      error: error,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json({
      status: 1,
      message: "chats fetched successfully",
      chats: messages,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error at getMessages",
      error: error,
    });
  }
};

export const sendMessages = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // ----------------------implement websocket here -----------------------

    res.status(201).json({
        status: 1,
        message: "message created successfully",
        newChat: newMessage
    })
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error at sendMessages",
      error: error,
    });
  }
};
