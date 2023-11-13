import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";
import { loadState } from "../helpers/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  preloadedState: persistedState,
});

export default store;
