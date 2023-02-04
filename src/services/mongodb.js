const mongoose = require("mongoose");

const mongodbURL = process.env.MONGODB_URL;
const mongo = mongoose.connection;

async function connectToMongodb() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }
}

mongo.on("error", console.error.bind(console, "Mongodb connection error: "));

mongo.once("open", function () {
  console.log("Mongodb Connected successfully");
});

async function closeMongodbConnection() {
  await mongoose.connection.close();
}

module.exports = {
  connectToMongodb,
  closeMongodbConnection,
};
