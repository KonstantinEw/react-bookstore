import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderBook } from "types";

interface IOrder {
  cart: IOrderBook[];
  quantity: number;
  total: number;
}

const initialState: IOrder = {
  cart: [],
  quantity: 0,
  total: 0,
};

const orderSlice = createSlice({
  name: "orderBooks",
  initialState,
  reducers: {
    //TODO type of payload
    addOrder: (state, action: PayloadAction<IOrderBook>) => {
      const itemInCart = state.cart.find((item) => item.isbn13 === action.payload.isbn13);
      if (itemInCart) {
        state.quantity++;
        itemInCart.amount++;
      }
      if (!itemInCart) {
        state.cart.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemInCart = state.cart.find((book) => book.isbn13 === action.payload);
      if (itemInCart) {
        state.quantity++;
        itemInCart.amount++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemInCart = state.cart.find((book) => book.isbn13 === action.payload);
      if (itemInCart) {
        state.quantity--;
        itemInCart.amount--;
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((itemInCart) => {
        return itemInCart.isbn13 !== action.payload;
      });
    },
    getTotal: (state) => {
      const gettotalPrice = (amount = 0, total = 0) => {
        state.cart.forEach((itemInCart) => {
          amount += itemInCart.amount;
          total += itemInCart.amount * parseFloat(itemInCart.price.replace(/[$]/gi, ""));
        });
        state.total = total;
        state.quantity = amount;
      };
      gettotalPrice();
    },
  },
});

export const { addOrder, deleteOrder, incrementQuantity, decrementQuantity, getTotal } =
  orderSlice.actions;
export default orderSlice.reducer;
