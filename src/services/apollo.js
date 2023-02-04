const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const path = require("path");
const app = require("../app");

let server;

const typesArray = loadFilesSync(path.join(__dirname, "../../**/*.graphql"));
const resolversArray = loadFilesSync(
  path.join(__dirname, "../../**/*.resolvers.js")
);

const schema = makeExecutableSchema({
  typeDefs: [typesArray],
  resolvers: resolversArray,
});

async function startApolloServer() {
  server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app, path: "/data" });
  return server;
}

async function stopApolloServer() {
  server.stop();
}

module.exports = {
  startApolloServer,
  stopApolloServer,
};
