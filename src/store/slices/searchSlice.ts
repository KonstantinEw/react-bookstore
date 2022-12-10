import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restBooksAPI } from "../../services";
import { IBook, IResponseSearch, ISearchParams } from "../../types";
import { RootState } from "../store";

export const feachSearchBooks = createAsyncThunk(
  "search/fetchSearchBooks",
  async (params: string) => {
    return await (
      await restBooksAPI.searchBooks(params)
    ).books;
  }
);

//разобраться с типизацией initialState

interface ISearchBook {
  result: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ISearchBook = {
  result: [],
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
      state.result = payload;
    });
    builder.addCase(feachSearchBooks.rejected, (state, { payload }: any) => {
      state.isLoading = true;
      state.result = payload;
      state.error = payload;
    });
  },
});

export default searchBooksSlice.reducer;
