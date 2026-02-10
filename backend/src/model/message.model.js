import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    receiverId: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Message = new mongoose.model("message", messageSchema);

export default Message;
