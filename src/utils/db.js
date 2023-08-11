import mongo from "mongoose";

export default connect = async () => {
  try {
    mongo.connect(process.env.MONGO);
  } catch (e) {
    throw new Error("connection failed");
  }
};
