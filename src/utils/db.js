import mongo from "mongoose";

const connect = async () => {
  try {
    mongo.connect(process.env.MONGO);
  } catch (e) {
    console.log(e);
    throw new Error("connection failed");
  }
};

export default connect;
