const { USERS_TYPES } = require("./schemas/users.schema");
const { signUp } = require("../controllers/userscontrollers");

const { gql } = require("apollo-server-express");
// const { PubSub } = require("apollo-server");

// const pubsub = new PubSub();
const QUERY = gql`
  type Query {
    user(
      id: ID
      first_name: String
      last_name: String
      email: String
      password: String
      position: String
      admin: Boolean
      company: String
    ): User
  }
`;

const MUTATION = gql`
  type Mutation {
    signUpUser(
      first_name: String
      last_name: String
      email: String
      password: String
      admin: Boolean
      company: String
    ): User
  }
`;

const typeDefs = [QUERY, MUTATION, USERS_TYPES];

const resolvers = {
  // Subscription: {
  //   messageAdded: {
  //     subscribe: () => {
  //       return pubsub.asyncIterator(["MESSAGE_ADDED"]);
  //     },
  //   },
  // },
  Mutation: {
    // signInUser: async (parent, args) => {
    //   return await signin({ ...args });
    // },
    signUpUser: async (parent, args) => {
      return await signUp({ ...args });
    },
    // createMessage: async (parent, args) => {
    //   pubsub.publish("MESSAGE_ADDED", {
    //     messageAdded: { ...args },
    //   });
    //   return await addMessage({ ...args });
    // },
  },
  // Query: {
  //   messages: async () => {
  //     return await getMessages();
  //   },
  //   user: async (paretn, args) => {
  //     return await findUser(args.usr);
  //   },
  // },
};

module.exports = { typeDefs, resolvers };
