import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import albumsReducer from "./slices/albumsSlice";
import { imagesApiSlice } from "./slices/imagesApiSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: [imagesApiSlice.reducerPath],
};

const rootReducer = combineReducers({
  [imagesApiSlice.reducerPath]: imagesApiSlice.reducer,
  albums: albumsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(imagesApiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;
