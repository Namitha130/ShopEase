// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer"; // Importing root reducer
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer, //  combining reducers
  devTools: process.env.NODE_ENV !== "production", // Enabling Redux DevTools in development mode
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Explicitly including redux-thunk
});

export default store;
