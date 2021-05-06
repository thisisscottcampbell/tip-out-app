import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";
const rootReducer = combineReducers({ loginReducer });

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(rootReducer);

export default store;
