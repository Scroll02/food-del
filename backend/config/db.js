import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://cjbanquito:VglkZJCRygvqQDpH@cluster0.uww2xfn.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
