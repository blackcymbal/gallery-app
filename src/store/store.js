import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { imagesApiSlice } from "./slices/imagesApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [imagesApiSlice.reducerPath]: imagesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApiSlice.middleware),
});
