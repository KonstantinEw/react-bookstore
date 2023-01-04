import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restBooksAPI } from "services";
import { IBook } from "types";

export const fetchNewBooks = createAsyncThunk<IBook[]>("newBooks/fetchNewBooks", async () => {
  return (await restBooksAPI.getNewBooks()).books;
});

interface INewBook {
  result: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: INewBook = {
  result: [],
  isLoading: false,
  error: null,
};

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = payload;
    });
    builder.addCase(fetchNewBooks.rejected, (state, action: any) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

export default newBooksSlice.reducer;
