import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";
const rootReducer = combineReducers({ loginReducer });

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>