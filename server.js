require("dotenv").config();
const app = require("./src/app");
const { startApolloServer } = require("./src/services/apollo");
const { connectToMongodb } = require("./src/services/mongodb");

const PORT = process.env.PORT;

async function startServer() {
  await connectToMongodb();
  await startApolloServer();

  app.listen(PORT, () => {
    console.log("Started graphql server..");
  });
}

startServer();
