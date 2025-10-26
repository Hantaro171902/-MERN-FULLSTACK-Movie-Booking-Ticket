import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
    mongoose.connection.on('connected', () => console.log('MongoDB connected'));
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;

