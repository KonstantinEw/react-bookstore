import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetailsBook } from "types";

interface IFavorite {
  favorite: IDetailsBook[];
}

const initialState: IFavorite = {
  favorite: [],
};

const faviriteSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IDetailsBook>) => {
      const itemInCart = state.favorite.find((item) => item.isbn13 === action.payload.isbn13);
      if (!itemInCart) {
        state.favorite.push({
          ...action.payload,
        });
      }
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((book) => {
        return book.isbn13 !== action.payload;
      });
    },
  },
});

export const { addFavorite, deleteFavorite } = faviriteSlice.actions;
export default faviriteSlice.reducer;
