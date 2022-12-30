import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import faviriteReducer from "./slices/faviriteSlice";
import newBooksReducer from "./slices/newBooksSlice";
import searchBooksReduser from "./slices/searchSlice";
import bookReducer from "./slices/bookSlice";
import orderReducer from "./slices/orderSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedOrderReducer = persistReducer(persistConfig, orderReducer);
const persistedFavoriteReducer = persistReducer(persistConfig, faviriteReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userReduser,
    favoriteBooks: persistedFavoriteReducer,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReduser,
    bookIsbn: bookReducer,
    orderBooks: persistedOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
