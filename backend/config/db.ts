import mongoose from "mongoose";
import colors from 'colors';
import { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
        // useCreateIndex: true,
      useUnifiedTopology: true
    } as ConnectOptions);

    console.log(colors.cyan.underline(`MongoDB connect: ${conn.connection.host}`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export  { connectDB };