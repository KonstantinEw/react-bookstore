import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetailsBook } from "types";

interface IOrder {
  cart: IDetailsBook[];
  quantity: number;
}

const initialState: IOrder = {
  cart: [],
  quantity: 0,
};

const orderSlice = createSlice({
  name: "orderBooks",
  initialState,
  reducers: {
    //TODO type of payload
    addOrder: (state, action: PayloadAction<any>) => {
      const itemInCart = state.cart.find((item) => item.isbn13 === action.payload.isbn13);
      const amount = 1;
      if (itemInCart) {
        state.quantity++;
      }
      if (!itemInCart) {
        state.cart.push({
          ...action.payload,
          amount,
        });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const book = state.cart.find((book) => book.isbn13 === action.payload);
      if (book) {
        state.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const book = state.cart.find((book) => book.isbn13 === action.payload);
      if (book) {
        state.quantity--;
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((book) => {
        return book.isbn13 !== action.payload;
      });
    },
  },
});

export const { addOrder, deleteOrder, incrementQuantity, decrementQuantity } = orderSlice.actions;
export default orderSlice.reducer;
