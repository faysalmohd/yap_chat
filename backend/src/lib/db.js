import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`>>> [MONGO CONNECTED SUCCESS] MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log('>>> [ERROR] MongoDB not connected. (make sure to have the access IP configured in mongoDB)', error)
  }
};
