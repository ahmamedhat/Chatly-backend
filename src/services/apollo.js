const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const path = require("path");
const { app } = require("../app");

const typesArray = loadFilesSync(path.join(__dirname, "../../**/*.graphql"));
const resolversArray = loadFilesSync(
  path.join(__dirname, "../../**/*.resolvers.js")
);

const schema = makeExecutableSchema({
  typeDefs: [typesArray],
  resolvers: resolversArray,
});

async function startApolloServer() {
  const server = new ApolloServer({
    schema,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  return server;
}

module.exports = {
  startApolloServer,
};
