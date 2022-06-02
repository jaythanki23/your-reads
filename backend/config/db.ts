import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const connectDB = async () => {
  console.log(process.env["MONGO_URI"])
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
        // useCreateIndex: true,
      useUnifiedTopology: true
    } as ConnectOptions);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export  { connectDB };