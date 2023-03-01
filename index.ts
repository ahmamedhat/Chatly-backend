require("dotenv").config();
const { startApolloServer } = require("./src/services/apollo");
const { connectToMongodb } = require("./src/services/mongodb");
const { connectSocketIo } = require("./src/services/socket");

async function startServer() {
  await connectToMongodb("Production");
  await startApolloServer();
  await connectSocketIo();
}

startServer();
