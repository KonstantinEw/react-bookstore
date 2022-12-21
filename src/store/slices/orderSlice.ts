import { createSlice } from "@reduxjs/toolkit";
import { arrayBuffer } from "stream/consumers";

interface IOrder {
  order: [];
}

const initialState: IOrder = {
  order: [],
};

const faviriteSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      state.order.push();
    },
    deleteOrder: (state, { payload }) => {
      state.order.filter((item, index) => {});
    },
  },
});

export default faviriteSlice.reducer;
