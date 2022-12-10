import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restBooksAPI } from "../../services";
import { IBook, IResponseSearch, ISearchResult } from "../../types";
import { RootState } from "../store";

export const feachSearchBooks = createAsyncThunk<
  IResponseSearch,
  ISearchResult
>("search/fetchSearchBooks", async (params: ISearchResult) => {
  return await restBooksAPI.searchBooks(params);
});

interface ISearchBook {
  result: IResponseSearch;
  isLoading: boolean;
  error: null | string;
}

const initialState: ISearchBook = {
  result: {} as IResponseSearch,
  isLoading: false,
  error: null,
};

const searchBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(feachSearchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(feachSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result.books = payload.books;
      state.result.page = payload.page;
    });
    builder.addCase(feachSearchBooks.rejected, (state, { payload }: any) => {
      state.isLoading = true;
      state.result = payload;
      state.error = payload;
    });
  },
});

export default searchBooksSlice.reducer;

// дотипизировать pyload
