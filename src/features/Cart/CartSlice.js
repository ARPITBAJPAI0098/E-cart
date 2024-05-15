import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addtocart,
  fetchitembyuser,
  updatecart,
  deleteItemFromCart,
} from "./CartAPI"; // Assuming these functions are correctly implemented in CartAPI
import { resetCart } from "./CartAPI";
const initialState = {
  value: 0, // this should only contain user identity => 'id'/'role'
  items: [], // Corrected the key name from 'item' to 'items'
  status: "idle", // Set the initial status to "idle"
  error: null,
};

export const addtocartAsync = createAsyncThunk(
  "cart/addtocart",
  async (item) => {
    const response = await addtocart(item);
    return response.data;
  }
);

export const fetchitembyuseridasync = createAsyncThunk(
  "cart/fetchitembyuser",
  async (userid) => {
    const response = await fetchitembyuser(userid);
    return response.data;
  }
);
export const updateitemasync = createAsyncThunk(
  "cart/updatecart",
  async (update) => {
    const response = await updatecart(update);
    return response.data;
  }
);
export const resetCartasync = createAsyncThunk(
  "cart/resetCart",
  async (userId) => {
    const response = await resetCart(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteItemFromCartAsync = createAsyncThunk(
  "cart/deleteItemFromCart",
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addtocartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addtocartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchitembyuseridasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchitembyuseridasync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload; // Replace 'items' with 'item' if your API returns a single item
      })
      //   .addCase(fetchitembyuseridasync.rejected, (state, action) => {
      //     state.status = "error";
      //     state.error = action.error.message; // Handle error message
      //   });
      .addCase(updateitemasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateitemasync.fulfilled, (state, action) => {
        state.status = "idle";

        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(resetCartasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetCartasync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = []; //jo bhi items api leki aaegi wo empty hojargi
      });
    // Replace 'items' with 'item' if your API returns a single item
  },
});

export const selectItems = (state) => state.cart?.items; // Corrected selector function
export default authSlice.reducer;
