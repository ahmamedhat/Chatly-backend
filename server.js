require("dotenv").config();
const app = require("./src/app");
const { startApolloServer } = require("./src/services/apollo");
const { connectToMongodb } = require("./src/services/mongodb");
const { connectSocketIo } = require("./src/services/socket");

const PORT = process.env.PORT;

async function startServer() {
  await connectToMongodb("Production");
  const server = await startApolloServer();
  await connectSocketIo(server);

  app.listen(PORT, () => {
    console.log("Started graphql server..");
  });
}

startServer();
