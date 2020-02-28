import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import countReducer from "../reducers/countReducer";
import countsReducer from "../modules/countsSlice";
import pageReducer from "../modules/pageListsSlice";

const logger = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV !== "production"
});

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer,
  pageList: pageReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
});

export default store;
