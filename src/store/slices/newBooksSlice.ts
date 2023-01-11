import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { restBooksAPI } from "services";
import { IBook } from "types";

export const fetchNewBooks = createAsyncThunk<IBook[]>("newBooks/fetchNewBooks", async () => {
  return (await restBooksAPI.getNewBooks()).books;
});

interface INewBook {
  results: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: INewBook = {
  results: [],
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
      state.results = payload;
    });
    builder.addCase(fetchNewBooks.rejected, (state, { payload }: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default newBooksSlice.reducer;
