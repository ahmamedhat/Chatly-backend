import { gql } from "apollo-server";

const chatsTypeDef = gql`
  type Query {
    chats(userId: ID!): [Chat]!
    users: [User]
    user(email: String!): User
    conversation(from: ID!, to: ID!): [Message!]!
  }

  type Mutation {
    createNewUser(name: String!, email: String!): User!
    addNewMessage(from: ID!, to: ID!, body: String!): Message!
  }

  type Chat {
    _id: ID!
    users: [User!]!
    lastMessage: Message!
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
    from: User!
    to: User!
    body: String!
    read: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;

export default chatsTypeDef;
