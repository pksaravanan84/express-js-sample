import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongo DB Connected: ${process.env.MONGO_URI}`);
};
