import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./OrderAPI";

const initialState = {
  value: 0, // this should only contain user identity => 'id'/'role'
  orders: [], // Corrected the key name from 'item' to 'items'
  status: "idle", // Set the initial status to "idle"
  error: null,
  currentOrderPlaced: false,
};

export const createOrderAsync = createAsyncThunk(
  "cart/createOrder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);

export const orderslice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
        state.currentOrderPlaced = true;
      });
  },
});

export const { resetOrder } = orderslice.actions;
export const selectcurrentOrderStatus = (state) =>
  state.order.currentOrderPlaced; //making selector for Corrected selector function
export default orderslice.reducer;
