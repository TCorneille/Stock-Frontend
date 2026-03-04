import { configureStore } from "@reduxjs/toolkit";
import { dropApi } from "../features/drop/dropApi";

export const store = configureStore({
  reducer: {
    [dropApi.reducerPath]: dropApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dropApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;