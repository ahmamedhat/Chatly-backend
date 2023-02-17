const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
// const { loadFilesSync } = require("@graphql-tools/load-files");
// const { makeExecutableSchema } = require("@graphql-tools/schema");
const path = require("path");
const { app } = require("../app");
const { loadFilesSync } = require("@graphql-tools/load-files");
// const { gql } = require("apollo-server");
const chatsTypeDef = require("../../models/chats/schema");

const typesArray = loadFilesSync(path.join(__dirname, "../../**/*.graphql"));
const resolversArray = loadFilesSync(
  path.join(__dirname, "../../**/*.resolvers.js")
);
const { chatsResolver } = require("../../models/chats/chats.resolvers");
const {
  messagesResolver,
} = require("../../models/messages/messages.resolvers");
const usersResolver = require("../../models/users/users.resolvers");

// console.log("types are ", typesArray);
// console.log("resolvers are ", resolversArray);

const typeDefs = [chatsTypeDef];

const resolvers = [chatsResolver, messagesResolver, usersResolver];

console.log("chats resolver is", chatsResolver);

// console.log("types are", typesArray[0].definitions);

// const schema = makeExecutableSchema({
//   // typeDefs: [typesArray],
//   typeDefs: [typesArray],
//   // resolvers: [resolversArray],
// });

async function startApolloServer() {
  const server = new ApolloServer({
    // schema
    // typeDefs: [typesArray],
    typeDefs,
    resolvers,
    // resolvers: resolversArray,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  return server;
}

module.exports = {
  startApolloServer,
};
