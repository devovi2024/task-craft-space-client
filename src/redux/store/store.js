import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../state-slice/loaderSlice";

// Store configuration
export const store = configureStore({
  reducer: {
    loader: loaderReducer, 
  },
  devTools: process.env.NODE_ENV !== "production", 
});
