import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/slice";
export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
