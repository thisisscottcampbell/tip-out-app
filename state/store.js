// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { ApolloClient, ApolloProvider } from 'react-apollo';
// import { todoReducer, userReducer } from './reducers';
// const client = new ApolloClient();
// const rootEl = document.querySelector("#root");
// const store = createStore(
//   combineReducers({
//     todos: todoReducer,
//     users: userReducer,
//     apollo: client.reducer(),
//   }),
//   {}, // initial state
//   compose(
//       applyMiddleware(client.middleware()),
//       // If you are using the devToolsExtension, you can add it here also
//       (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//   )
// );
// ReactDOM.render(
//   <ApolloProvider store={store} client={client}>
//     <MyRootComponent />
//   </ApolloProvider>,
//   rootEl
// )

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./reducers/loginReducer";

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(loginReducer, composeWithDevTools());

export default store;
