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

  app.use("/graphql", expressMiddleware(server));

  return server;
}

module.exports = {
  startApolloServer,
};
