import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IResponseSearch, ISearchResult } from "types";

export const feachSearchBooks = createAsyncThunk<
  IResponseSearch,
  ISearchResult,
  { rejectValue: string }
>("search/fetchSearchBooks", async (params, { rejectWithValue }) => {
  try {
    return await restBooksAPI.searchBooks(params);
  } catch (error) {
    const errorResponse = error as AxiosError;
    return rejectWithValue(errorResponse.message);
  }
});

interface ISearchBook {
  searchResults: IResponseSearch;
  isLoading: boolean;
  error: null | string;
}

const initialState: ISearchBook = {
  searchResults: {} as IResponseSearch,
  isLoading: false,
  error: null,
};

const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(feachSearchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(feachSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults.books = payload.books;
      state.searchResults.page = payload.page;
      state.searchResults.total = payload.total;
    });
    builder.addCase(feachSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

export default searchBooksSlice.reducer;
