import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";
import slipReducer from "./reducers/slipReducer";

const rootReducer = combineReducers({ loginReducer, slipReducer });

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>