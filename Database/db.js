import mongoose from "mongoose";

const connection = async () => {
  // database url
console.log("***" , process.env.MONGO_DB_URL)
  const URL = process.env.MONGO_DB_URL;
  mongoose.set("strictQuery", false);

  // mongoose connection block 
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database connected Succesfully  ");
  } catch (error) {
    console.log("error during database connectivity ", error);
  }
};

export default connection;
