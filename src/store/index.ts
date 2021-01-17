import { configureStore } from "@reduxjs/toolkit";
import { createSelectorHook, useDispatch } from "react-redux";

import exampleReducer from "./exampleReducer";

const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = createSelectorHook<RootState>();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
