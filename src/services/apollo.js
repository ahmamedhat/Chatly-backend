const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
// const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
// const path = require("path");
const { app } = require("../app");
// const { loadFilesSync } = require("@graphql-tools/load-files");

// const typesArray = loadFilesSync(path.join(__dirname, "../../**/*.graphql"));
// const resolversArray = loadFilesSync(
//   path.join(__dirname, "../../**/*.resolvers.js")
// );

const typeDefs = [
  /* GraphQL */ `
    schema {
      query: RootQuery
    }

    type RootQuery {
      aNumber: Int
    }
  `,
];

// console.log("types are", typesArray[0].definitions);

const schema = makeExecutableSchema({
  // typeDefs: [typesArray],
  typeDefs,
  // resolvers: [resolversArray],
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
