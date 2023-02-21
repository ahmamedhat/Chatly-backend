const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { app } = require("../app");
const chatsTypeDef = require("../../models/schema");
const { chatsResolver } = require("../../models/chats/chats.resolvers");
const {
  messagesResolver,
} = require("../../models/messages/messages.resolvers");
const usersResolver = require("../../models/users/users.resolvers");

const typeDefs = [chatsTypeDef];

const resolvers = [chatsResolver, messagesResolver, usersResolver];

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://chatlylive.vercel.app/"
    );
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    // Pass to next layer of middleware
    next();
  });

  app.use("/graphql", expressMiddleware(server));

  return server;
}

module.exports = {
  startApolloServer,
};
