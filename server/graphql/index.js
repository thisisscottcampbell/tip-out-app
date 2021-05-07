const { USERS_TYPES } = require("./schemas/users.schema");
const { signUp, signInUser } = require("../controllers/userscontrollers");

const { gql } = require("apollo-server-express");
// const { PubSub } = require("apollo-server");

// const pubsub = new PubSub();
const QUERY = gql`
  type Query {
    getUser(email: String, password: String): User
  }
`;

const MUTATION = gql`
  type Mutation {
    createUser(
      first_name: String
      last_name: String
      email: String
      password: String
      admin: Boolean
      company: String
    ): User
  }
`;

//type User { id: ID, first_name: String, last_name: String, email: String, password: String, position: String, admin: Boolean, company: String }

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
    createUser: async (parent, args) => {
      return await signUp({ ...args });
    },
    // createMessage: async (parent, args) => {
    //   pubsub.publish("MESSAGE_ADDED", {
    //     messageAdded: { ...args },
    //   });
    //   return await addMessage({ ...args });
    // },
  },
  Query: {
    getUser: async (parent, args) => {
      return await signInUser(args);
    },
  },
};

module.exports = { typeDefs, resolvers };
