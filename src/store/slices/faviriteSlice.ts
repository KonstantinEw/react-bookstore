import { createSlice } from "@reduxjs/toolkit";

interface IFavorite {
  favorite: [];
}

const initialState: IFavorite = {
  favorite: [],
};

const faviriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorite.push();
    },
  },
});

export default faviriteSlice.reducer;
