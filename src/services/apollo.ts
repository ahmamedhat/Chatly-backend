import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import app from "../app";
import chatsTypeDef from "../../models/schema";
import chatsResolver from "../../models/chats/chats.resolvers";
import messagesResolver from "../../models/messages/messages.resolvers";
import usersResolver from "../../models/users/users.resolvers";

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
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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
