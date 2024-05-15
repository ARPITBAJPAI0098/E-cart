import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchloggedinuserorder } from "./UserAPI";
// Assuming these functions are correctly implemented in CartAPI
const initialState = {
  userorders: [],
  userInfo: 0,
  status: "idle",
};

export const fetchloggedinuserorderasync = createAsyncThunk(
  "cart/fetchloggedinuserorder",
  async (userid) => {
    const response = await fetchloggedinuserorder(userid);
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
      .addCase(fetchloggedinuserorderasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchloggedinuserorderasync.fulfilled, (state, action) => {
        state.status = "idle";
        //this information can be different or simply more than loggedinuser
        state.userorder = action.payload;
      });
  },
});
export const selectuserorders = (state) => state.user.userorders;
export const selectItems = (state) => state.cart?.items; // Corrected selector function
export default authSlice.reducer;
