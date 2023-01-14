import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IResponseNewBooks } from "types";

export const fetchNewBooks = createAsyncThunk<IResponseNewBooks, void, { rejectValue: string }>(
  "newBooks/fetchNewBooks",
  async (params, { rejectWithValue }) => {
    try {
      return await restBooksAPI.getNewBooks();
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

interface INewBook {
  results: IResponseNewBooks;
  isLoading: boolean;
  error: undefined | string;
}

const initialState: INewBook = {
  results: {} as IResponseNewBooks,
  isLoading: false,
  error: undefined,
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
      state.results.books = payload.books;
    });
    builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (state.error) {
        state.error = payload;
      }
    });
  },
});

export default newBooksSlice.reducer;
