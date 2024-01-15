import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
});

// Create the Redux Persist store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;