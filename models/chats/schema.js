const { gql } = require("apollo-server");

const chatsTypeDef = gql`
  type Query {
    chats: [Chat]
    chat(_id: ID!): Chat
    users: [User]
    messages: [Message]
  }

  type Mutation {
    addNewChat(
      name: String!
      users: [UserInput]!
      messages: [MessageInput] = []
    ): Chat!
    createNewUser(name: String!, email: String!): User!
    addNewMessage(chat: ChatInput!, user: UserInput!, body: String!): Message!
  }

  input UserInput {
    _id: ID!
  }

  input MessageInput {
    _id: ID!
  }
  input ChatInput {
    _id: ID!
  }

  type Chat {
    _id: ID!
    name: String!
    users: [User]
    messages: [Message]
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    email: String!
    name: String!
    chats: [Chat]
    createdAt: String!
    updatedAt: String!
  }

  type Message {
    _id: ID!
    chat: Chat!
    user: User!
    body: String!
    createdAt: String!
    updatedAt: String!
  }
`;

module.exports = chatsTypeDef;
