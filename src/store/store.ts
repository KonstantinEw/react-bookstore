import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import faviriteReducer from "./slices/faviriteSlice";
import newBooksReducer from "./slices/newBooksSlice";
import searchBooksReduser from "./slices/searchSlice";

//Типизация возвращаемого значения
export type RootState = ReturnType<typeof store.getState>;

// Тип самого диспатча
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userReduser,
    favorite: faviriteReducer,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReduser,
  },
});
