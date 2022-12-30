import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "types";

interface IOrder {
  order: IBook[];
}

const initialState: IOrder = {
  order: [],
};

const orderSlice = createSlice({
  name: "orderBooks",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IBook>) => {
      state.order.push({
        image: action.payload.image,
        isbn13: action.payload.isbn13,
        price: action.payload.price,
        subtitle: action.payload.subtitle,
        title: action.payload.title,
        url: action.payload.url,
      });
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.order = state.order.filter((book) => {
        return book.isbn13 !== action.payload;
      });
    },
  },
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
