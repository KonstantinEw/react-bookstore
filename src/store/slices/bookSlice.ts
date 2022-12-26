import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IBookIsbn13, IDetailsBook } from "types";

export const feachGetBooks = createAsyncThunk<IDetailsBook, IBookIsbn13, { rejectValue: string }>(
  "getBook/fetchGetBook",
  async (params, { rejectWithValue }) => {
    try {
      return await restBooksAPI.getBook(params);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

interface IGetBook {
  result: IDetailsBook;
  isLoading: boolean;
  error: null | string;
}

const initialState: IGetBook = {
  result: {} as IDetailsBook,
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "getBook",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(feachGetBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(feachGetBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = payload;
    });
    builder.addCase(feachGetBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

export default bookSlice.reducer;
