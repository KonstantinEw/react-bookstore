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
    addFavorite: (state, { payload }: PayloadAction<IDetailsBook>) => {
      const itemInCart = state.favorite.find((item) => item.isbn13 === payload.isbn13);
      if (!itemInCart) {
        state.favorite.push(payload);
      }
    },
    deleteFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((book) => {
        return book.isbn13 !== payload;
      });
    },
  },
});

export const { addFavorite, deleteFavorite } = faviriteSlice.actions;
export default faviriteSlice.reducer;
