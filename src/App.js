// json-server is used to make dummyapi
import * as React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage.js";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage.js";
import Cart from "./features/Cart/Cart.js";
import CartPage from "./pages/CartPage.js";
import Checkout from "./pages/Checkout.js";
import Productdetails from "./features/Product-list/Components/Productdetails.js";
import Protected from "./features/Auth/Protected.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchitembyuseridasync } from "./features/Cart/CartSlice.js";
import { useEffect } from "react";
import { selectLoggedInUser } from "./features/Auth/Authslice.js";
import Pagenotfound from "./pages/404.js";
import OrderSuccess from "./pages/OrderSuccess.js";
import UserOrder from "./features/User/UserOrder.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-details/:id",
    element: (
      <Protected>
        <Productdetails />
      </Protected>
    ),
  },
  {
    path: "*", //
    element: <Pagenotfound></Pagenotfound>,
  },
  {
    path: "/ordersuccess", //
    element: <OrderSuccess></OrderSuccess>,
  },

  {
    path: "/orders",
    element: <UserOrder />,
  },
]);

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchitembyuseridasync(user.id));
    }
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
//put routerdom where you want routing
