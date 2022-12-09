import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import faviriteReducer from "./slices/faviriteSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    favorite: faviriteReducer,
  },
});
