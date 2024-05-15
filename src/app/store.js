import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Product-list/ProductListslice.js";
import authReducer from "../features/Auth/Authslice.js";
import CartReducer from "../features/Cart/CartSlice.js";
import OrderReducer from "../features/Order/OrderSlice.js";
import userReducer from "../features/User/Userslice.js";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: CartReducer,
    order: OrderReducer,
    user: userReducer,
  },
});
