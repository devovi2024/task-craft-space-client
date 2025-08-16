import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings.slice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer
  },
});
