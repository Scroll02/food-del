import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("secret_key_mongodb")
    .then(() => console.log("DB Connected"));
};
