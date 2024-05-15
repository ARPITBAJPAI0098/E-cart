import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchproductbyid } from "./ProductListAPI.js";

const initialState = {
  products: [], // product array me hi sare data a jae
  status: "idle",
  selectedproduct: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchAllProductasync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    //aync ,await jabtak data fetallproduct se call horha hai
    return response.data;
  }
);
// export const fetchProductbyfilterasync = createAsyncThunk(
//   "product/ fetchproductbyfilter",
//   async (filter) => {
//     const response = await fetchproductbyfilter(filter);
//     // The value we return becomes the `fulfilled` action payload
//     //aync ,await jabtak data fetallproduct se call horha hai
//     return response.data;
//   }
// );

export const fetchproductbyidasync = createAsyncThunk(
  "product/fetchproductbyid",
  async (id) => {
    const response = await fetchproductbyid(id);
    // The value we return becomes the `fulfilled` action payload
    //aync ,await jabtak data fetallproduct se call horha hai
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductasync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      // //below 2 add cases are for product filtering by naming(selecting)
      // .addCase(fetchProductbyfilterasync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(fetchProductbyfilterasync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.products = action.payload;
      // });
      .addCase(fetchproductbyidasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchproductbyidasync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedproduct = action.payload;
      });
    // //b
  },
});

export const { increment } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice fil For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAllproduct = (state) => state.product.products;
export const selectedproductid = (state) => state.product.selectedproduct;

export default productSlice.reducer;
