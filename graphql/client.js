import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const server_url = 'localhost:8080/graphql';

export const client = new ApolloClient({
  uri: `http://${server_url}`,
  cache: new InMemoryCache()
});

// const httpLink = new HttpLink({
//   uri: `http://${server_url}`,
// });

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://${server_url}`,
//   options: {
//     reconnect: true,
//   },
// });

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });