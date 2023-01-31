const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const path = require("path");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
  typeDefs: [typesArray],
  resolvers: resolversArray,
});

const startApolloServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app, path: "/data" });

  app.listen(3000, () => {
    console.log("Started graphql server..");
  });
};

startApolloServer();
